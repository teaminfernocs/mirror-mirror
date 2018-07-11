const express = require('express');
const strategies = require('../utils/passport');
const passport = require('passport');
const path = require('path');
const controllers = require('../controllers');
strategies();

const router = express();

router.get('/login/github/return',
  passport.authenticate('github', { failureRedirect: '/error' }),
  function(req, res, next) {
    res.sendFile(path.join(__dirname + './../../build/index.html'));
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
  }
);

//interviews
const interviewRouter = express.Router();
interviewRouter.get('/', controllers.interviews.get);
interviewRouter.post('/', controllers.interviews.create);

router.use('/interviews', interviewRouter);

// companies
const companyRouter = express.Router();
companyRouter.get('/', controllers.companies.get);
companyRouter.get('/:id', controllers.companies.get);
companyRouter.post('/', controllers.companies.create);

router.use('/companies', companyRouter);

module.exports = router;