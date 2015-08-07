'use strict';

var input = {
  alma: 1,
  korte: 5,
  banan: 6,
  szilva: 2
};

function transform1(input) {
  var output = [];
  for (var key in input) {
    output.push({
      key: key,
      value: input[key]
    });
  }
  return output;
}

function transform2(input) {
  var output = [];
  Object.keys(input).forEach(function(key) {
    output.push({
      key: key,
      value: input[key]
    });
  });
  return output;
}

function transform3(input) {
  return Object.keys(input).
    reduce(function(output, key) {
      output.push({
        key: key,
        value: input[key]
      });
      return output;   
    }, []);
}

console.log(transform3(input));
