
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
})(12);

//let sorted = R.sort((a, b) => a - b);

function fn(s) {

	var count = 0;

	var sub = '';
	var flip = 0;
	var zeros = 0;
	var ones = 0;

	for (var i = 0; i < s.length; i++) {
		
		sub = '';
		flip = 0;
		ones = 0;
		zeros = 0;

		for (var j = i; j < s.length; j++) {

			sub += s[j];

			if (s[j] === '0') {
				zeros++
			} else {
				ones++
			}

			if (sub.length % 2 == 0 && zeros === ones && flip === 1) count++;

			if (j < s.length - 1 && s[j + 1] !== s[j]) flip++;
		}
		
	}

	return count;
	
}

console.clear();

console.log(fn('00110'));
console.log(fn('10101'));
console.log(fn('10001'));



