
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
	while (R.length < n) {
		var element = +(Math.random() * 10).toFixed();
		if (Math.random() > 0.5) element = [ element ];
		R.push(element);
	}
	return R;
})(12000)

var sorted = (A) => A.sort((a, b) => a - b);


function latticePaths(n) {

  var grid = [];

  for (var i = 0; i < n + 1; i++) {
    var level = [];
    for (var j = 0; j < n + 1; j++) {
      if (i == n || j == n) {
        level.push(1);
      } else {
        level.push(0);
      }
    }
    grid.push(level);
  };

  for (var a = n - 1; a >= 0; a--) {
    for (var b = n - 1; b >= 0; b--) {
      grid[a][b] = grid[a + 1][b] + grid[a][b + 1];
    }
  };

  return grid[0][0];

};



console.clear();

console.log(latticePaths(20));








