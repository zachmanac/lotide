const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2) === false) {
    return console.log(`🛑 Assertion Failed, ${JSON.stringify(array1)} does not equal ${JSON.stringify(array2)}`);
  }
  return console.log(`✅ Assertion Passed, ${JSON.stringify(array1)} equals ${JSON.stringify(array2)}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); //should be true
assertArraysEqual([1, 2, 3], [1, "2", 3]); //should be false
assertArraysEqual([1, 2, 3], [3, 2, 1]); //should be false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //should be true