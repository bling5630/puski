'use strict';

var test = require('tape');
var potter = require('./');

test(function(t) {
  t.throws(function() {
    potter();
  }, /No books provided/);
  t.equal(potter([]), 0);
  t.equal(potter([0]), 8);
  t.equal(potter([0, 1]), 8 * 2);
  t.equal(potter([0, 0]), 8 * 2 * 0.95);
  t.equal(potter([0, 0, 0]), 8 * 3 * 0.90);

  t.end();
});
