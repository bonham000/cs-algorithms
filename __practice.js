
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
})(25)

var sorted = (A) => A.sort((a, b) => a - b);

function maxSum(array) {

	var negatives = 0;
	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		if (negatives < 0 && array[i] > 0) {
			var priorSum = (negatives + array[i]);
			if (array[i] > (priorSum + sum)) {
				sum = array[i];
				negatives = 0;
			} else if ((priorSum + sum) > sum) {
				sum += priorSum;
				negatives = 0;
			}
		} else if (array[i] < 0) {
			if (sum === 0) continue;
			negatives += array[i];
		} else if (array[i] >= 0) {
			sum += array[i];
		}
	}

	return sum;

};

console.clear();

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSum(nums));



























