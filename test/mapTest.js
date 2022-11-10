const assert = require('chai').assert;
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("returns first letter in each word of array", () => {
    assert.deepEqual(map(words, word => word[0]), ["g","c","t","m","t"]);
  });
});