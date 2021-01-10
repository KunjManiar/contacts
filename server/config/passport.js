const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// require('./strategies/local-strategy.js')();
// const debug = require('debug')('app:passport');
const config = require('./config').get(process.env.NODE_ENV);
const User = require('../models/user')

function passportConfig(app) {
    app.use(passport.initialize());
    app.use(passport.session());

    // Stores user in session
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // Retrieves user from session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    
    passport.use(new GoogleStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: `${config.URI}/auth/google/callback`
      },
        function (accessToken, refreshToken, profile, done) {
          // console.log(accessToken);
          // console.log(refreshToken);
          // console.log(profile)
          // token = accessToken
      
          // const authObj = new google.auth.OAuth2({
          //   access_type: 'offline',
          //   clientId: config.GOOGLE_CLIENT_ID,
          //   clientSecret: config.GOOGLE_CLIENT_SECRET,
          //   redirectUri: `${config.URI}/auth/google/contacts`,
          //   scope: [`https://www.googleapis.com/auth/contacts`]
          // });
          // authObj.setCredentials({
          //   access_token: accessToken,
          //   refresh_token: refreshToken,
          // });

          // contentFunctions.listConnectionNames(authObj, profile.emails[0].value)

          // userProfile = profile;

          const user = new User({
            email: profile.emails[0].value,
            givenName: profile.name.givenName,
            familyName: profile.name.familyName,
            photo: profile.photos[0].value,
            accessToken: accessToken,
            refreshToken: refreshToken
          })

          const updateUser = User.saveOrUpdate(user)

          return done(null, profile);
        }
      ));
}
module.exports = passportConfig;