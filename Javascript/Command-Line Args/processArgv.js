//Use process.argv to assign two argumanets to varaibales, return true or false

//short way
console.log(process.argv[2] === process.argv[3])


//or the long way

function compare() {
    if(ProcessingInstruction.argv[2] === ProcessingInstruction.argv[3]) {
      return true;
    } else {
      return false;
    }
  };
  var ans = compare();
  console.log(ans);