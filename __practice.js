
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

let countColors = (array) => {
	let counter = [0,0,0];
	array.forEach(v => {
		switch(v) {
			case 0:
				counter[0] = counter[0] + 1;
				break;
			case 1:
				counter[1] = counter[1] + 1;
				break;
			case 2:
				counter[2] = counter[2] + 1;
				break;
		};
	});
	let result = [];
	let i = 0;
	while (i < 3) {
		if (counter[i] > 0) {
			result.push(i);
			counter[i] = counter[i] - 1;
		} else {
			i++;
		};
	}
	return result;
}

console.clear();

console.log(countColors([0,1,2,1,0,2,1,0,2,1,2,2,1,1,1,1,0,2,1,0,2,2]));





