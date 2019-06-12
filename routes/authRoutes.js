const passport = require('passport');
const keys = require('../config/config');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account',
    }),
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log(req.user);
      res.redirect(`${keys.clientURL}/?token=${req.user.token}`);
      // res.redirect(`http://${keys.clientURL}/?token=${req.user.token}`);
    },
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
