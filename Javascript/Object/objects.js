* [Objects](https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) 

  // Object in javascript are unordered collections of data that can be related or unrelated. Created using key value pairs that can contain any type of data.
  Data types that are objects: Arrays, Dates, Math, Functions;
     primitive data types that are not objects: null, undefined, strings, numbers, symbols, booleans
  
Creating Objects:
Object Literals - define and create an object in one statement:
EX.const car = { name: 'honda', model: 'civic', year: '2000', color: 'black' };

Using the "new" keyword:
EX. const Honda = new Car()
  
Using constructors - creating objects from blueprints:
class Car (
  constructor(name, model, year, color) {
  this.name = name;
  this.model - model;
  this.year = year;
  this.color = color;
  }

  //1. Object customerDrink with three properties
  var customerDrink = {
    name: "coffee",
    sugars: 3,
    isReady: true
  };

  // This logs the entire object
  console.log(customerDrink);

  // Note that in dot notation, the name of the object is followed by the key
  if (customerDrink.isReady) {
    console.log("Ready for pick-up: " + customerDrink.name + " with " + customerDrink.sugars + " sugars.");

    // Note that in bracket notation, the key is inside brackets and surrounded by quotes
  } else {
    console.log("Still in order queue: " + customerDrink["name"] + " with " + customerDrink["sugars"] + " sugars.");
  }



  // 2. netflixQueue is an object for managing your netflix queue
  var netflixQueue = {
    queue: [
      "Mr. Nobody",
      "The Matrix",
      "Eternal Sunshine of the Spotless Mind",
      "Fight Club"
    ],
    watchMovie: () => {
      this.queue.pop();
    },
    addMovie: (movie) => {
      this.queue.unshift(movie);
    },
    printQueue: () => {
      var list = "";
      for (var i = this.queue.length - 1; i >= 0; i--) {
        var currentMovie = this.queue[i];
        list += (this.queue.length - i) + ". " + currentMovie + "\n";
      }
      console.log(list);
    }
  };

  console.log("Printing movie queue!\n"); netflixQueue.printQueue(); netflixQueue.watchMovie(); console.log("\nWatched a movie!\n"); console.log("Printing movie queue!\n"); netflixQueue.printQueue(); console.log("\nAdding a movie!\n"); netflixQueue.addMovie("Black Swan"); console.log("Printing movie queue!\n"); netflixQueue.printQueue();