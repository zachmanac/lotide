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

const middle = function(array) {
  
  let middleElement = [];
  
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return middleElement;
  }
  if (array.length % 2 === 1) {
    let midIndexOdd = ((array.length / 2) - 0.5);
    middleElement.push(array[midIndexOdd]);
  }
  if (array.length % 2 === 0) {
    let midIndexHigh = (array.length / 2);
    let midIndexLow = ((array.length / 2) - 1);
    middleElement.push(array[midIndexLow]);
    middleElement.push(array[midIndexHigh]);
  }
  return middleElement;
};


assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []

// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]