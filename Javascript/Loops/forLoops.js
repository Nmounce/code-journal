//1. store an array, log each item to console
var students = ["Nikki", "Pat", "Addison", "Goober", "Kitty"];
console.log(students.length);
for (var i = 0; i < students.length; i++) {
   console.log("Great to see you" + students[i] + "!");
}


// 2. funnyCase makes each letter in a string the opposite case as the one before
var funnyCase = (string) => {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
      if (i % 2 === 0) newString += string[i].toLowerCase();
      else newString += string[i].toUpperCase();
    }
    return newString;
  };
  
  // Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
  console.log(funnyCase("You can't just do whatever you want all the time!"));
  
  // --------------------------------------------------------------------------
  
  // 3. Map lets you loop over an array and modify the elements inside
  var map = (arr, cb) => { //array, callback
    var result = [];
    for (var i= 0; i < arr.length; i++) {
      var currentElement = arr[i];
      result.push(cb(currentElement, i));
    }
    return result;
  };
  
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  var doubled = map(numbers, (element) => {
    return element * 2;
  });
  
  // Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
  console.log(doubled);
  
  // --------------------------------------------------------------------------
  
  // 4. filter lets you loop over an array and remove elements
  var filter = (arr, cb) => {
    var result = [];
    for (var index = 0; index < arr.length; index++) {
      var currentElement = arr[index];
      if (cb(currentElement, index)) {
        result.push(currentElement);
      }
    }
    return result;
  };
  
  var evenNumbers = filter(numbers, (currentElement) => {
    return currentElement % 2 === 0;
  });
  
  // Prints `[ 2, 4, 6, 8, 10 ]`
  console.log(evenNumbers);
  
  // --------------------------------------------------------------------------
  
// Write code to loop through the array of numbers
    // At each iteration, if a number is evenly divisible by 3 print "Fizz"
    // If a number is evenly divisible by 5 print "Buzz"
    // If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
    // If a number is not divisible by 3 or 5, print the number

    var fizzBuzz = function(arr) {
        for (var i = 0; i < arr.length; i++) {
        var currentNumber = arr[i];
    
        if (currentNumber % 15 === 0) {
            console.log("Fizz Buzz");
        } else if (currentNumber % 3 === 0) {
            console.log("Fizz");
        } else if (currentNumber % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(currentNumber);
        }
        }
    };
    