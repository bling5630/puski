'use strict';

var request = require('request');

function wordCount(callback) {
  request('http://google.com', function(error, response, body) {
      callback(error, body);
  });
};

module.exports = wordCount;
