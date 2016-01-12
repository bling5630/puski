var fs = require('fs');

function readTXT(filename, cb) {
  fs.readFile('./' + filename + '.txt', function(err, data) {
    cb(err, data.toString());
  });
}

readTXT('text', function(err, data) {
  console.log(data);
});

console.log('end');
