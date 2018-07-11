require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const passport = require('passport');
const Strategy = require('passport-github').Strategy;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressSession = require('express-session');
const controllers = require('./controllers/index.js');
const router = require('./routes');

app.use(morgan('dev'));
app.use(expressSession({ secret: process.env.EXPRESS_KEY, resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', passport.authenticate('github', { failureRedirect: '/error' }))
app.use(express.static('build'));
app.use('/', require('./routes'));
app.use('*', (req, res) => res.status(404).send('error!'));

app.listen(3000, () => {
  console.log('listening at port 3000...');
});