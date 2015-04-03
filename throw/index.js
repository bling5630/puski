/*function alma() {
  throw new Error('asdfasdf');
}

function korte() {

  alma();

}

korte();*/

var fs = require('fs');

fs.readFile('./alma', function(err, file) {
  if (err) {
    return console.log('nem volt file');
  }
  console.log(file);
});

