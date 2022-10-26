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

const letterPositions = function(sentence) {
  
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];

    if (character === " ") {
      continue;
    }
    if (results[character]) {
      results[character].push(i);
    } else {
      results[character] = [i];
    }
  }
  
  return results;
};

letterPositions("Hello World");
console.log(letterPositions("Hello World"));
assertArraysEqual(letterPositions("Hello World").l, [2, 3, 9]);
