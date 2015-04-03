'use strict';

var BASE_PRICE = 8;
var DISCOUNTS = {
  1: 1,
  2: 0.95,
  3: 0.90
};

function potter(books) {
  validateInput(books);
  return calculateOutput(books);
}

function validateInput(books) {
  if (!books) {
    throw new Error('No books provided');
  }
}

function calculateOutput(books) {
  if (!books.length) {
    return 0;
  }
  if (isAllElementsSame(books)) {
    return calculateDiscountedPrice(books);
  }
  return books.length * BASE_PRICE;
}

function calculateDiscountedPrice(books) {
  return BASE_PRICE * books.length * DISCOUNTS[books.length];
}

function isAllElementsSame(list) {
  var first = list[0];
  for (var i = 1; i < list.length; i++) {
    if (first !== list[i]) {
      return false;
    }
  }
  return true;
} 

module.exports = potter;
