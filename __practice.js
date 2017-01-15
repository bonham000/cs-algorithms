
"use strict"

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
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

function gameOfLife(board) {
	let nextState = [];
	for (let a = 0; a < board.length; a++) {
		let row = [];
		for (let b = 0; b < board[a].length; b++) {
			let friends = 0;

			if (b > 0 && board[a][b - 1] == 1) friends++;
			if (b < board[a].length && board[a][b + 1] == 1) friends++;

			if (a > 0 && b > 0 && board[a - 1][b - 1] == 1) friends++;
			if (a > 0 && board[a - 1][b] == 1) friends++;
			if (a > 0 && b < board[a].length && board[a - 1][b + 1] == 1) friends++;

			if (a < board.length - 1 && b > 0 && board[a + 1][b - 1] == 1) friends++;
			if (a < board.length - 1 && board[a + 1][b] == 1) friends++;
			if (a < board.length - 1 && b < board[a].length && board[a + 1][b + 1] == 1) friends++

			if (board[a][b] == 1 && (friends < 2 || friends > 3)) {
				row.push(0);
			} else if (board[a][b] == 1 && (friends == 2 || friends == 3)) {
				row.push(1);
			} else if (friends == 3 && board[a][b] == 0) {
				row.push(1);
			} else {
				row.push(0);
			}

		}
		nextState.push(row);
	}
	for (let a = 0; a < board.length; a++) {
		for (let b = 0; b < board[a].length; b++) {
			board[a][b] = nextState[a][b];
		}
	}
}

console.clear();

var N = [
	[0,0,0,0],
	[0,1,1,0],
	[0,1,1,0],
	[0,0,0,0]
];

console.log(gameOfLife(N));



