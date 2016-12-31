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
})(8);



// test code:
console.clear();








