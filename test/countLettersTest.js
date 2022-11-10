const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("returns 2 for o's in 'Hello World'", () => {
    assert.strictEqual(countLetters('Hello World').o, 2); 
  });
});