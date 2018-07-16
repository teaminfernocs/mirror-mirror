const pg = require('pg');

module.exports = {
  create(req, res) {
    // New Appointment details for the phone owner
    const appointment = [];
    // Grab data from req body.
    const {
      userId, notification, timezone, time,
    } = req.body;
    // Connect to already running DB
    pg.connect(process.env.DATABASE_URL, (err, client, done) => {
      // Handle error
      if (err) {
        done();
        return res.status(500).json({ err });
      }
      // SQL query to insert Data.
      client.query('INSERT INTO appointments(user_id, notification, timezone, time) values($1, $2, $3, $4)', [userId, notification, timezone, time]);

      const query = client.query('SELECT * FROM appointments WHERE user_id=$(1) ORDER BY id DESC LIMIT 1', [userId]);
      // Push new appointment to appointment array
      query.on('row', (row) => {
        appointment.push(row);
      });

      // Close connection and return results
      query.on('end', () => {
        done();
        return res.json(appointment);
      });
    });
  },
};
