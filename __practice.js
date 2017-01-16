
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

function nums(input) {

	function count(a, b) {
		var count = 0;
		a--;
		while (a < b) {
			a++;
			var num = a;
			num = num.toString().split('');
			var reduced = num.reduce((total, elem) => {
				if (total.indexOf(elem) === -1) {
					total.push(elem);
					return total;
				} else {
					return;
				}
			}, []);
			if (reduced) {
				count++;
			}
		}
		return count;
	}

	for (let params of input) {
		console.log(count(params[0], params[1]));
	}
}

console.clear();

let A = [[1,20], [10,19]]

console.log(nums(A));