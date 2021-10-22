//Example Model.js:

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true, //removes whitespace
    required: "String is Required"
  },

  number: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"] //runs regex 
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now
  },

  longstring: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."]
  }
});

const Example = mongoose.model("Example", ExampleSchema);

module.exports = Example;

//in pkg.json: require express, mongoose, morgan

//Example server.js:

const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });

const data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });


  //when you set something as 'unique' mongoose automatically builds an index
  //for it

