var wordCount = require('./request');

wordCount(function(err, body) {
  console.log(body);
});
