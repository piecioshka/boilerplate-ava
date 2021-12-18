const { Assertions } = require("ava/lib/assert");

Object.assign(Assertions.prototype, {
  anArrayOfSize(value, length) {
    this.assert(Array.isArray(value));
    this.assert(value.length === length);
  },
});

/* Usage:

test("Custom Matcher", (t) => {
  t.anArrayOfSize(['a'], 1);
});

*/
