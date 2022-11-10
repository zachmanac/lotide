const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns 2 for Fang in firstNames", () => {
    assert.deepEqual(countOnly(firstNames, {"Fang": true}), { Fang: 2 }); 
  });
});