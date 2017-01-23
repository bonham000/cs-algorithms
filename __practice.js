
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

function ratPath(maze) {

  var solution = [];

  var xLimit = maze[0].length - 1;
  var yLimit = maze.length - 1;

  function navigate(x, y, path) {

    if (x === xLimit && y === yLimit) {
      solution.push(path);
    } else {

      var pathCopy = [...path];

      if (x < xLimit && maze[x + 1][y] === 0) {
        path.push([x + 1, y]);
        navigate(x + 1, y, path);
      }

      if (y < yLimit && maze[x][y + 1] === 0) {
        pathCopy.push([x, y + 1]);
        navigate(x, y + 1, pathCopy);
      }

    }

  }

  navigate(0, 0, [[0, 0]]);

  return solution;

}

console.clear();

var maze = [[0, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0]];

console.log(ratPath(maze));