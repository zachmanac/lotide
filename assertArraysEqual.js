const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1, array2) === false) {
    return console.log(`🛑 Assertion Failed, ${JSON.stringify(array1)} does not equal ${JSON.stringify(array2)}`);
  }
  return console.log(`✅ Assertion Passed, ${JSON.stringify(array1)} equals ${JSON.stringify(array2)}`);
};

module.exports = assertArraysEqual;