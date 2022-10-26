const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

countLetters("Hello World");
console.log(countLetters("Hello World"));
