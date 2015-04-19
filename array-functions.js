'use strict';

/*
var arr = [0, 1, 2, 3, 4, 5];

var fn = {};

for (var i = 0; i < arr.length; i++) {
  function aa(i) {
    fn['function_' + i] = function() {
       console.log(i);
    };
  }

  aa(i);
}
*/
//console.log(i);
//fn.function_0();


/*
arr.forEach(function(e) {
//  console.log(e);
});


function alma() {
  var a = 3;
  console.log(a);
}

alma();
console.log(a);



*/


var aaa = 0;

function increment(a) {
  a++;
  console.log(a);
}

increment(aaa);
console.log(aaa);

var obj = {
 a: 0
};

function incrementObj(o) {
  o.a++;
}

incrementObj(obj);
console.log(obj);



// Closure

//erdeti
var countOld = 0;

function counter() {
  countOld++;
  console.log(countOld);
}

counter();
counter();
counter();


// objektum
function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function() {
  this.count++;
  console.log(this.count);
};

var c = new Counter();

c.increment();
c.increment();
c.increment();

// fugvenyek

function createCounter() {
  var count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

var c2 = createCounter();

c2();
c2();
c2();

var c3 = createCounter();

c3();

(function() {
  var kacsa = 3;
  console.log(kacsa);
})();






var _ = require('lodash');


[1, 2, 3, 4].forEach(function(e, i, a) {
  console.log(i);
});

_.forEach([1, 2, 3, 4], function(e, i, a) {
  console.log(e, 'lodash');
  //return false;
});

var old = [0, 1, 2, 3, 4, 5, 6, 7, 8]

var filtered = old.filter(function(e, i, a) {
  if (e % 2 === 0) {
    return true;
  }
  return false;
});

console.log(filtered, old);


var doubles = [0, 1, 2, 3, 4].map(function(e) {
  return e * 3;
});

console.log(doubles);

var isAllLessThan13 = [2, 3, 4, 15].every(function(e) {
  return e < 13;
});

console.log(isAllLessThan13);

var isAtLeastOneLessThan13 = [2, 3, 4, 15].some(function(e) {
  return e < 13;
});

console.log(isAtLeastOneLessThan13);

var sorted = [4,2,5,7,2,7,1,9].sort(function(a, b) {
  return a - b;
});

console.log(sorted);

var all = [0, 1, 2].concat([3, 4, 5]);

[0, 1, 2, 3, 4].indexOf(7) > -1;

var a = [];

a.push(1);
a.push(2);
console.log(a.pop());






var sum = [0, 1, 2, 3, 4, 5, 6, 7, 8].reduce(function(acc, e, i, a) {
  acc['index_' + i] = e;
  return acc;
}, {});

console.log(sum);




var users = [{
  name: 'tibi'
}, {
  name: 'zsolti'
}, {
  name: 'laci'
}, {
  name: 'anna'
}];

var count = users.map(function(e) {
  return e.name.length === 4;
}).reduce(function(acc, e) {
  if (e) {
    acc++;
  }
  return acc;
}, 0);

console.log(count);



















