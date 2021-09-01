/EXAMPLE1 IGNORE
//First Server 
// Require/import the HTTP module
const http = require('http');

// Define a port to listen for incoming requests
const PORT = 8080;

// Create a generic function to handle requests and responses
const handleRequest = (request, response) => {
    // Send the below string to the client when the user visits the PORT URL
    response.end(`It Works!! Path Hit: ${request.url}`);
};

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
const server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});



/EXAMPLE2
const express = require('express');
const path = require('path');

const app = express(); //starts express server
const PORT = 3001;

//Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes')); //path corresponds to the '/'


//this is a get route
app.get('/send', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

//Create a route that will serve up the `public/routes.html` page
app.get('/routes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/routes.html')) //callback
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

//paths have no coorelation to where a file is, but does have a coorelation to
//where our routes are

/We interact with servers via requests- servers can be moved or manipulated and
will not affect the interction(routes are indepenedent of where files are located)

crud = get, post, put, delete