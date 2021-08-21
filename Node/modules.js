// module.exports is an object that we use to store variables or methods (exports items from function and exports them to another file)

const { builtinModules } = require("node:module")

//in another file, create you function
//ex
const greeter = (name) => console.log('Hello ${name}!');
module.export = greeter; //now it can be included in any other file

//in file that you want to call the function (main js file) add:

const greetModule = require(./greeter); //file path 
greetModule(process.argv[i])


//EXAMPLE
 //in math.js file

 module.exports = {
    sum: (a, b) => a + b,
    difference: (a, b) => a - b,
    product: (a, b) => a * b,
    quotient: (a, b) => a / b,
  };

  //in index.js file

  // TODO: Import `maths.js`
const math = require('./maths')
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2] 
const numOne = parseInt(process.argv[3])
const numTwo = parseInt(process.argv[4])

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch(operation) {
    case 'sum':
        console.log(maths.sum(numOne, numTwo))
        break;
        case 'difference':
        console.log(maths.difference(numOne, numTwo))
        break;
        case 'product':
        console.log(maths.product(numOne, numTwo))
        break;
        case 'quotient':
        console.log(maths.quotient(numOne, numTwo))
        break;
    default:
        console.log('We need an operation')
}