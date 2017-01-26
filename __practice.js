
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

function isToeplitz(matrix) {

  var row = 0;
  var left = 0;
  
  while (left < matrix.length - 1) {
    var expected = matrix[row][left];
    row++;
  
    while (row < matrix.length) {
      if (expected !== matrix[row][left + 1]) return false;
      expected = matrix[row][left];
      row++;
    }

    left++;
    row = 0;

  }

  return true;

};

function isToeplitzReduce(matrix) {

  function checkRow(idx) {
    for (var i = 0; i < matrix.length - 1; i++) {
      if (matrix[idx][i] !== matrix[idx + 1][i + 1]) return false;
    }
    return true;
  }

  return matrix.reduce((answer, row, idx) => {
    if (idx < matrix.length - 1 && !checkRow(idx)) {
      return false;
    } else {
      return (answer) ? true : false;
    };
  }, true);

};

console.clear();

var toeplitz = [[3, 4, 5, 6],
                [2, 3, 4, 5],
                [1, 2, 3, 4],
                [0, 1, 2, 3]];

console.log(isToeplitz(toeplitz));
console.log(isToeplitzReduce(toeplitz));