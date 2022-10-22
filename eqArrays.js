const eqArrays = function(array1, array2) {
  let arr1 = array1.toString();
  let arr2 = array2.toString();

  if (arr1 !== arr2) {
    return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), false);