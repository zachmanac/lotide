const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    return console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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




const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === true) {
        continue;
      } else {
        return false;
      }
    }
    if (object1[key] === object2[key]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
console.log(eqObjects(ab, ba));
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(eqObjects(cd, dc));
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(eqObjects(cd, cd2));
assertEqual(eqObjects(cd, cd2), false);