'use strict';

var MAGIC_NUMBER = 3;

function isContainingMagicNumber(number) {
  return number.
    toString().
    split('').
    some(function(e) {
      return e === String(MAGIC_NUMBER);
    });
}

function isContainingMagicNumber2(number) {
  var index = number.
    toString().
    search(String(MAGIC_NUMBER));
  return index > -1;
}
