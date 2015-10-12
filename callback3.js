var fs = require('fs');


fs.readFile('korte', function(err, f) {
  console.log(f.toString());
});
fs.readFile('alma', function(err, f) {
  console.log(f.toString());
});

