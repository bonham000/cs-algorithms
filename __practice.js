
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

var exist = function(board, word) {
  
  var found = false;
	var maxY = board.length;
	var maxX = board[0].length;

  function explore(y, x, used, compare) {

  	var target = word[compare];
  	var next = compare++;

  	console.log(y, x, used)

  	var left = (x > 0) ? board[y][x - 1] : undefined;
  	var right = (x < maxX) ? board[y][x + 1] : undefined;
  	var up = (y > 0) ? board[y - 1][x] : undefined;
  	var down = (y < maxY) ? board[y + 1][x] : undefined;

  	var leftID = y.toString() + (x - 1).toString();
  	var rightID = y.toString() + (x + 1).toString();
  	var upID = (y - 1).toString() + x.toString();
  	var downID = (y + 1).toString() + x.toString();

  	if (left && !used[leftID]) {
  		if (left === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				console.log('going left')
  				explore(y, x - 1, Object.assign({ [leftID]: true }, used), next);
  			}
  		}
  	}
  	if (right && !used[rightID]) {
  		if (right === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				console.log('going right')
  				explore(y, x + 1, Object.assign({ [rightID]: true }, used), next);
  			}
  		}
  	}
  	if (up && !used[upID]) {
  		if (up === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				console.log('going up')
  				explore(y - 1, x, Object.assign({ [upID]: true }, used), next);
  			}
  		}
  	}
  	if (down && !used[downID]) {
  		if (down === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				console.log('going down')
  				explore(y + 1, x, Object.assign({ [downID]: true }, used), next);
  			}
  		}
  	}

  }
  
  for (var i = 0; i < maxY; i++) {
    for (var j = 0; j < maxX; j++) {
      if (board[i][j] === word[0]) {
      	explore(i, j, {}, 1);
      }
    }
  }

  return found;

};

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

console.clear();
console.log(exist(board, 'ABCE'));







