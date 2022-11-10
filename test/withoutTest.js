const assert = require('chai').assert;
const without = require('../without');

const words = ["hello", "world", "lighthouse"]

describe("#without", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`returns ["hello", "world"] for ["hello", "world", "lighthouse"]`, () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
});