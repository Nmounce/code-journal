const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData));

// GET route that returns allterms 
app.get('/api/terms/:term', (req, res) => {
    // Coerce the specific search term to lowercase
    const requestedTerm = req.params.term.toLowerCase();
    // ^named from the ":term" above
    // Iterate through the terms name to check if it matches `req.params.term`
    for (let i = 0; i < termData.length; i++) { //the terms.json file has multiple listed items with "term" specifications
        if (requestedTerm === termData[i].term.toLowerCase()) {
            return res.json(termData[i]);
        }
    }

    // Return a message if the term doesn't exist in our DB
    return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
    res.send(
        `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
    )
);

// Listen for connections
app.listen(PORT, () =>
    console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);



//in terms.json file
[{ //this is the ":term" that above calls
        "term": "SEO",
        "definition": "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic.",
        "url": "https://en.wikipedia.org/wiki/Search_engine_optimization"
    },
    {
        "term": "API",
        "definition": "An application programming interface, is a computing interface that defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc",
        "url": "https://en.wikipedia.org/wiki/API"
    },
    {
        "term": "REST",
        "definition": "Stands for Representational State Transfer. This term is usually used in the context of describing an API where requests are made to a URI and a response is given in the form of HTML, XML, JSON, or some other format",
        "url": "https://en.wikipedia.org/wiki/Representational_state_transfer"
    }
]





/EXAMPLE 2
const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
//GET route that returns all terms
app.get('/api/terms/', (req, res) => {
  // TODO: Add a comment describing the req.query object
    //req.query checks to see if there is a query using '?'
  const hasQuery = Object.keys(req.query).length > 0;
//if theres is a query we determine how we are sorting:
  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }//looks like: descending order

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }//looks like: ascending order

  // If there is no query parameter, return terms
  return res.json(termData);
});




/EXAMPLE 3: TODO: Add a comment describing what this route will return
 //returns a single specific term (:term- can be anything)
app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
    //set of variables for the term passed in as a parameter
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
//GET request that returns a list of available categories
             // v returns many terms (hence the s)
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return

app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
