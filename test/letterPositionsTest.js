const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns [2, 3, 9] for L", () => {
    assert.deepEqual(letterPositions("Hello World").l, [2, 3, 9]);
  });
});