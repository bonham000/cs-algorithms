
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
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

function booleanZeros(matrix) {

  var count = 0;
  var right = matrix[0].length - 1;
  var level = 0;

  while (right > -1 && level < matrix.length) {
    if (matrix[level][right] === 1) {
      right--;
    } else {
      count += (right + 1);
      level++;
    }
  };

  return count;

};

function booleanZerosReduce(matrix) {
  var edge = matrix[0].length - 1;
  return matrix.reduce((zeros, row) => {
    while (row[edge] === 1) edge--;
    return (zeros + edge + 1);
  }, 0);
};

console.clear();

var matrix = [[0, 0, 0, 1],
              [0, 0, 0, 1],
              [0, 0, 1, 1],
              [0, 0, 1, 1],
              [0, 1, 1, 1],
              [1, 1, 1, 1]];

console.log(booleanZeros(matrix));
console.log(booleanZerosReduce(matrix));


