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


const flatten = function(array) {

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element) === false) {
      newArray.push(element);
      continue;
    }
    for (let j = 0; j < element.length; j++) {
      newArray.push(element[j]);
    }
  } 
  return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log(flatten(["a", ["b", 4], 3]));
assertArraysEqual(flatten(["a", ["b", 4], 3]), ["a", "b", 4, 3]);
