const db = require('../db');

module.exports = {
  create: (req, res, next) => {
    const { name, website, city, state, country } = req.body;
    db.one('INSERT INTO companies(name, website, city, state, country) VALUES($1, $2, $3, $4, $5) RETURNING *', [name, website, city, state, country])
      .then(company => res.json(company))
      .catch(error => res.status(400).json(error))
  },
  get: (req, res, next) => {
    let query = 'SELECT * FROM companies';
    let values = [];
    if (req.params.id) {
      query += ' WHERE id = $1';
      values = [req.params.id];
    }
    db.any(query, values)
      .then(companies => res.json(companies))
      .catch(error => next(error));
  }
}