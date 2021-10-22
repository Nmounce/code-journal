  //custom methods are similar to hooks in sequelize. 

user.method lets you add a method to the schema that you can access later.
  
    example:
    UserSchema.methods.coolifier = function() {
        this.username = `${this.username}...the Coolest!`;
        return this.username;
      };
      
      //in server.js run method:

      app.post("/submit", ({ body }, res) => {
        const user = new User(body); //gives us a new instance of a new user object stored as lower case u 'user'
        user.coolifier();
        user.makeCool();

        User.create(user) //references parent 'user' object...
          .then(dbUser => {
            res.json(dbUser);
          })
          .catch(err => {
            res.json(err);
          });
      });


EX2:

// setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
UserSchema.methods.setFullName = function() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this.fullName;
  };
  
  // lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
  UserSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
};

//in server.js
// Route to post our form submission to mongoDB via mongoose
app.post("/submit", ({ body }, res) => {
    // Create a new user using req.body
    const user = new User(body)
    // Update this route to run the `setFullName` and `lastUpdatedDate` methods before creating a new User
    user.setFullName()
    user.lastUpdatedDate()

    User.create(body)
    .then(dbUser => {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(err => {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});