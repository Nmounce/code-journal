* Express is a server
* Routes - like traffic lanes - can be used to create, read, update or delete data.*restful API - (representational state tranfer) is an architecture
for creating a web service API.Comprised of Client, serves and request via HTTP.Use stateless communications between client and server(transactional).Maintain a uniform interface between client and server.Code can be performed on demand.

** Run in terminal using node server.js

* HTTP methods - 4 main methods:
    POST submits datat to the spcified resource causing a change to server
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

