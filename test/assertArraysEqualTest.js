const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); //should be true
assertArraysEqual([1, 2, 3], [1, "2", 3]); //should be false
assertArraysEqual([1, 2, 3], [3, 2, 1]); //should be false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //should be true