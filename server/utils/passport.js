const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const db = require('../db');

const strategies = () => {
  passport.use(new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/github/return'
  },
    (accessToken, refreshToken, profile, cb) => {
      db.any('SELECT * FROM users WHERE github_id = $1', profile.id)
        .then((user) => {
            const { username, displayName, email, id, photos } = profile;
            if (!user.length) {
              db.one('INSERT INTO users(github_username, github_displayname, email, github_id, profile_pic) VALUES($1, $2, $3, $4, $5) RETURNING *', [username, displayName, email, id, photos[0].value])
                .then(data => cb(null, data))
                .catch(error => cb(err));
            } else {
              return cb(null, user[0]);
            }
          }).catch((err) =>cb(err));
    }));

  passport.serializeUser((user, cb) => cb(null, user.id));
  passport.deserializeUser((user, cb) => cb(null, user));
}

module.exports = strategies;