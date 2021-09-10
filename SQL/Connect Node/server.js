const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'classlist_db'
  },
  console.log(`Connected to the classlist_db database.`)

  app.get('/', (req, res) => {
    db.query('SELECT * FROM classlist', function (err, result) {
      res.json(results)
    });
  })

  app.get('/students/:id', (req, res) => {
    db.query('SELECT * FROM students WHERE id = ${req.params.id}',
      function (err, result) {
      res.json(results)
    });
  })

  app.delete('/students/:id', (req, res) => {
    db.query('DELETE FROM students WHERE id = ${req.params.id}',
      function (err, result) {
      res.json(results)
    });
  })

  app.post('/', (req, res) => {
    const { first, last } = req.body
    db.query('INSERT INTO students (first_name, last_name, enrolled)
      VALUES ("${ first }", "${ last }", 0), function (err, result) {
        if (err) {
          res.json(err)
        }
      res.json(results)
    });
  })

// Use connection to Query database that returns data as JSON
db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


