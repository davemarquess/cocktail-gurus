const mysql = require('mysql');

// Setting up database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connecting to database
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Connected to database...');
});

module.exports = db;
