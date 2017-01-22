
'use strict';

// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	console.log(result);
};

function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// generate a random array:
var R = [];
(function gen(n = 5) {
	while (R.length < n) R.push(+(9 - Math.random() * 10).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);


function threeSum(array) {

  var cache = {};
  array.forEach((n, i) => cache[n] = i);

  for (var a = 0; a < array.length; a++) {
    var current = array[a];
    for (var b = a + 1; b < array.length; b++) {
      var needed = -(current + array[b]);
      if (needed in cache && cache[needed] != a && cache[needed] != b) {
        return [a, b, cache[needed]];
      };
    };
  };

  return false;

};

// function depthCounter(arr) {
//   let depth = 0;

//   function howDeep(array, i, d) { 
//     if (Array.isArray(array[i])) {
//       return howDeep(array[i], 0, d + 1);
//     } else {
//       depth = (d > depth) ? d : depth;
//     }

//     if (i < array.length) {
//       return howDeep(array, i + 1, d);
//     }

//   }

//   howDeep(arr, 0, 0);
//   return depth;

// }

// let myNestedArray = [ 1,
//   [ 2, 'coding is fun!', 3, 4, true ],
//   [ true, false, "xxxxx",
//     [ 3, 4, 5,
//       [ 4, 5, 6, 7,
//         [1, 2, 3, 'coding is fun!']
//       ]
//     ]
//   ],
//   [
//     2, 3, 4, 5, 6, 7, 8, 100000
//   ]
// ];


console.clear();
console.log(R)
console.log(threeSum(R));

//console.log(depthCounter(myNestedArray));








