const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!

const smallArray = [];
tail(smallArray);
console.log(tail(smallArray));
assertEqual(smallArray.length, 0);

const oneArray = ['one'];
tail(oneArray);
console.log(tail(oneArray));
assertEqual(oneArray.length, 1);