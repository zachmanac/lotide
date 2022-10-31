const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;

};

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

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g","c","t","m","t"]);