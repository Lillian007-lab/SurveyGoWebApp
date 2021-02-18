const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .sort({ dateSent: "desc" })
      .select({
        recipients: false,
      });
    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys/webhooks", (req, res) => {
    console.log("webhooks req.body:");
    console.log(req.body);
    // console.log(req.body.length);
    const p = new Path("/api/surveys/:surveyId/:choice");

    _.chain(req.body)
      .map(({ email, url }) => {
        if (url) {
          const pathname = new URL(url).pathname;
          const match = p.test(pathname);
          if (match) {
            return {
              email: email,
              surveyId: match.surveyId,
              choice: match.choice,
            };
          }
        }
      })
      .compact() //  remove undefined elements
      .uniqBy("email", "surveyId") // remove duplicated email and surveyId
      .each(({ surveyId, email, choice }) => {
        const findRecipientQuery = Survey.find({
          _id: surveyId,
          // "recipients.email": email,
          recipients: {
            $elemMatch: {
              email: email,
              // repliedTimestamp: { $lt: new Date(repliedTimestamp * 1000) },
              responded: false,
            },
          },
        });

        Survey.updateOne(findRecipientQuery, {
          $inc: { [choice]: 1 },

          $set: {
            "recipients.$.responded": true,
          },
          lastResponded: new Date(),
        }).exec();
      })
      .value();

    //console.log(events);
    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map((email) => {
        return {
          email: email.trim(),
        };
      }),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send an email!
    const mailer = await Mailer(survey, surveyTemplate(survey));
    //mailer.send();
    try {
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/api/survey", requireLogin, async (req, res) => {
    // console.log("from back end: ");
    const { surveyid } = req.headers;

    await Survey.remove({ _id: mongoose.Types.ObjectId(surveyid) }, (err) => {
      if (!err) {
        console.log("Survey id: " + surveyid + " is deleted");
      } else {
        console.log(err);
      }
    });

    const surveys = await Survey.find({ _user: req.user.id })
      .sort({ dateSent: "desc" })
      .select({
        recipients: false,
      });
    res.send(surveys);
  });
};
