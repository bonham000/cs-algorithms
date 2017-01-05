
"use strict"

// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	console.log(result);
};

// generate a random array:
let R = [];
(function gen(n) {
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(15);

let sorted = R.sort((a, b) => a - b);

function twoSum(array, target) {
	let cache = {};
	let val = null;
	for (let i = 0; i < array.length; i++) {
		val = array[i];
		if ( (target - val) in cache) {
			return [cache[target - val], i];
		}
		cache[val] = i;
	}
	return [-1, -1];
}

// test code:
console.clear();

console.log(twoSum([1,2,3,4,5], 3));