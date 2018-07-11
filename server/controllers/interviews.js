const db = require('../db');

module.exports = {
  create: (req, res) => {
    const { company_id, position, notes, type, interview_date, questions } = req.body;
    let user_id;
    if (req.session && req.session.passport && req.session.passport.user) {
      user_id = req.session.passport.user.id;
    }
    user_id = user_id || req.body.user_id;

    db.one('INSERT INTO interviews(user_id, company_id, position, notes, type, interview_date, questions) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *', [user_id, company_id, position, notes, type, interview_date, questions])
      .then(interview => res.json(interview))
      .catch(error => res.status(400).json(error));
  },
  get: (req, res, next) => {
    let query = 'SELECT * FROM interviews';
    let values = [];
    if (req.query.company_id) {
      query += ' WHERE company_id = $1';
      values = [req.query.company_id];
    }
    db.any(query, values)
      .then(interviews => res.json(interviews))
      .catch(error => next(error));
  }
};