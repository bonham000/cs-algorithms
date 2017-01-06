
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
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(15);

let sorted = R.sort((a, b) => a - b);

function sortedTwoSum(array, target) {
	if (array.length < 2) return [-1, -1];
	let f = 0;
	let l = array.length - 1;
	let diff = null;
	while (f < l) {
		diff = target - array[f];
		while (array[l] > diff) l--;
		if (array[l] == diff) return [f, l];
		f++;
	}
	return [-1, -1];
}

console.clear();
console.log(sorted);
console.log(sortedTwoSum([1,2,3], 5));





