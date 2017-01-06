
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
	while (R.length < n) R.push(+(Math.random() * 1).toFixed());
	return R;
})(30200);

let sorted = R.sort((a, b) => a - b);

function numberOnes(array) {

	if (array.length === 0) return 0;

	let m = null;
	function findFirst(s, e) {
		m = Math.floor((e - s) / 2) + s;
	
		if (array[m] === 1 && array[m - 1] === 0) {
			return m;
		}

		else if (array[m] === 0) {
			return findFirst(m, e);
		}

		else if (array[m] === 1 && array[m - 1] === 1) {
			return findFirst(s, m);
		};

	}
	let first = findFirst(0, array.length - 1);
	return array.length - first;
}

console.clear();
console.log(sorted);
console.log(sorted.reduce((num, n) => {
	return (n === 1) ? num + 1 : num;
}, 0));
console.log(numberOnes(sorted));





