const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

//Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));//path corresponds to the '/'


//this is a get route
app.get('/send', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

//Create a route that will serve up the `public/routes.html` page
app.get('/routes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/routes.html'))//callback
);

app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);