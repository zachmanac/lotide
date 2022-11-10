const countLetters = function(string) {
  
  let count = {};

  for (let character of string) {
    if (character === " ") {
      continue;
    }
    if (count[character]) {
      count[character] += 1;
    } else {
      count[character] = 1;
    }
  }
  
  return count;
};

module.exports = countLetters;
