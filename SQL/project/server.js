const express = require('express');
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
    user: 'root',
    password: 'Justfuckingwork1!',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
)

app.post('/api/add-movie'(req, res) => {
    const query = `INSERT INTO movies (movie_name) VALUES (?)`
    const { movieName } = req.body
    db.query(query, movieName, (err, result) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json({
            message: "success!",
            data: result
        })
    })
})

app.get('/api/movies'(req, res) => {
    const query = `SELECT movies.movie_name, reviews.review_name FROM reviews JOIN movies ON movie.db = reviews.movie_id ORDER BY movies.id`
    db.query(query, (err, result) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json(result)
    })
})

app.delete('/api/movie/:id'(req, res) => {
    const query = `UPDATE reviews SET review = ? WHERE id = ?`
    const { id, review } = req.body
    db.query(query, [review, id] (err, result) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json(result)
    })
})

//for update
app.put('/api/update-review'(req, res) => {
    const query = `DELETE * FROM movies WHERE id = ?`
    db.query(query, req.params.id (err, result) => {
        if (err) {
            res.status(400).json(err)
        }
        res.json(result)
    })
})
//   app.get('/', (req, res) => {
//     db.query('SELECT * FROM movies', function (err, result) {
//       res.json(result)
//     });
//   })

//   app.get('/movies/:id', (req, res) => {
//     db.query(`SELECT * FROM movies WHERE id = ${req.params.id}`,
//       function (err, result) {
//       res.json(result)
//     });
//   })

//   app.delete('/movies/:id', (req, res) => {
//     db.query(`DELETE FROM movies WHERE id = ${req.params.id}`,
//       function (err, result) {
//       res.json(result)
//     });
//   })

//   //POST request
// app.post('/movies', (req, res) => {
//     db.query('insert into movies (movie_name) value ?', req.body)
//     function (err, result) {
//         res.json(result)
//       });
//     })

//     // Inform the client that their POST request was received
//     res.json(`${req.method} added to movie list`);

// app.post('/api/update-review', (req, res) => {
//     db.query('insert into review (movie_id, review_name) values (?,?)', [req.body.id, req.body.review])
// })
// // Use connection to Query database that returns data as JSON
// db.query('SELECT * FROM movies', function (err, results) {
//   console.log(results);
// });

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

