const express = require('express');

const PORT = 3001;
const app = express();


//this is an HTML route, but does not have a hard coded HTML file
app.get('/', (req, res) => {
  res.send(
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

//this is an API route that serves out data in the form of JSON (use res.json)
app.get('/api', (req, res) => {
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


//EXAMPLE

// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const terms = require('./terms.json');
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our
// `terms.json` file
app.get('/api', (req, res) => {
    res.json(terms); //respons with terms.json
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
