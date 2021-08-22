const express = require("express");
// CommonJS module syntax

// another syntax: if you have ES 2015 modules
// import express from 'express';
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSeesion = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("./models/User"); // as passport is using model users, we need to make sure models is executed before the next line
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSeesion({
    maxAge: 24 * 60 * 60 * 1000, // one day
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
// or we can separate it into the following:
// const authRouts = require('./routes/authRoutes');
// authRouts(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production accests
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
// dynamic port, or default using 5000

app.listen(PORT);
// port

// route: localhost:5000
