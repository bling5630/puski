var nock = require('nock');

var wordCount = require('./request');


nock('http://google.com').get('/').reply(200, 'mivan?');

wordCount(function(err, body) {
  console.log(body === 'mivan?');
});
