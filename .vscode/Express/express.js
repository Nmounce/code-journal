* Express is a server
    *
    Routes - like traffic lanes - can be used to create, read, update or delete data.*restful API - (representational state tranfer) is an architecture
for creating a web service API.Comprised of Clien, serves and request via HTTP.Use stateless communications between client and server(transactional).Maintain a uniform interface between client and server.Code can be performed on demand.

    **
    Run in terminal using node server.js

    *
    HTTP methods - 4 main methods:
    POST submits datat to the spcified PerformanceResourceTiming, causing a change to server
GET retrieves a resource from server
DELETE deleted
PUT used to update data


EX.
// Get route for static homepage
app.get('/', (req, res) =>
        res.sendFile('index.html');
        //GET route for all reviews
        app.get('api/reviews, (req, res) =>
            res.json(reviewData));
        //POST route to add a single review
        app.post('/api/reviews'.(req, res) => {
            const newReview = req.body
        })
        //Fetch request to add a new pet
        const addPet = (pet) => {
            fetch('/api/pets', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pet),
                })
                .then((res) => res.json())
                .then((pets) => console.log(pets));
        }


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