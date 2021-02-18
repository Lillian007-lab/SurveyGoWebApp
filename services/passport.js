const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
      // instead of set proxy true, we can fix it in an alternative way:
      // callbackURL: 'https://frozen-escarpment-33382.herokuapp.com/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) => {
      // console.log('access token: ', accessToken);
      // console.log('refresh token: ', refreshToken);
      // console.log('profile: ', profile);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // we already have a record with the given profile ID
        done(null, existingUser);
      } else {
        // we don't have a record with this ID, make a new record
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);
