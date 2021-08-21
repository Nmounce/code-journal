// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// function to write to the file with anything you pass in as process.argv[2] <- targeting index#2 of the array

fs.writeFile('log.txt', process.argv[2], (err) => 
  err ? console.error(err) : console.log('Success!') //returns success no matter what text input given to console
);

//log.txt creates a file in folder that stores any text input data logged to the console (file we are appending to)
//'$' value that is being appended
// (err) callback to run when complete or error
// ? is ternary operator= shorthand if/else

//append file to save text log

fs.appendFile('log.txt', '${process.argv[2]}\n', (err) => //creates a log.txt file in folder that stores any text input data logged to the console
  err ? console.error(err) : console.log('Success!') //returns success no matter what text input is given to console
);
