
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
})(7);

//let sorted = R.sort((a, b) => a - b);


function quickSort(array) {
	
	if (array.length < 2) return array;

	let pivot = array[0];
	let boundary = 1;

	for (let i = 1; i < array.length; i++) {
		if (array[i] <= pivot) {
			[array[boundary], array[i]] = [array[i], array[boundary]];
			boundary++;
		}
	}

	let mid = boundary - 1;

	[array[0], array[mid]] = [array[mid], array[0]];
	
	let left = quickSort(array.slice(0, mid));
	let right = quickSort(array.slice(mid + 1));

	return [...left, array[mid], ...right];

}

console.clear();

let A = [7]

console.log(R);
console.log(quickSort(R));










