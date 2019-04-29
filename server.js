const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const keys = require('./config/config');
const { CLIENT_ORIGIN } = require('./config/config');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(morgan('tiny'));

const PORT = process.env.PORT || 3000;

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  }),
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.get('/api/*', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () =>
  console.log(`CORS-enabled server listening on port ${PORT}`),
);

module.exports = { app };
