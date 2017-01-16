
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
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

function fn(prices) {
  let profit = 0;
  let least = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < least) least = prices[i];
    if (prices[i] - least > profit) profit = prices[i] - least;
  }
  return profit;
}


console.clear();

let s = [7, 1, 5, 3, 6, 4];

console.log(fn(s));