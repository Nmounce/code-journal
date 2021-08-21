var vowelCount = function(str) {
    var count = 0;
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase();
  
      if (vowels.indexOf(letter) !== -1) {
        result += 1;
      }
    }
  
    return result;
  };