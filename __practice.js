
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


console.clear();

var data = [
	[0, 1, 2],
	[4, 7, 9],
	[5, 0, 2],
];

var N = [
	[0,0,0,5],
	[4,3,1,4],
	[0,1,1,4],
	[1,2,1,3],
	[0,0,1,1]
];

console.log(setZeros(N));



