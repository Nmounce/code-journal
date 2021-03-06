// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];

for (const value of songs) console.log(value);

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

// Using multidimensional arrays
const moreSongs = [
    ['Bad Guy', 1],
    ['The Wheels on the Bus', 2],
    ['Friday', 3],
  ];
  
  //key is name, value is number
  for (const [key, value] of moreSongs) {
    console.log(`${key}'s chart position is ${value}`);
  }
  
  /* Output:
    Bad Guy's chart position is 1
    The Wheels on the Bus's chart position is 2
    Friday's chart position is 3
  */

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of