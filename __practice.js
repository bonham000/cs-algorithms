
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

function latticePaths(N) {

	var validToEnd = {};
	var uniquePaths = 0;

	function explore(x, y, path) {
		if (x === N && y === N) {
			uniquePaths++;
			path.forEach(position => {
				validToEnd[(position[0].toString() + position[1].toString())] = true;
			});
			return;
		}
		if (x < N) {
			if (validToEnd[((x + 1).toString() + y.toString())] === true) {
				uniquePaths++;
			} else {
				path.push([x + 1, y]);
				explore(x + 1, y, path);
			};
		}
		if (y < N) {
			if (validToEnd[((x).toString() + (y + 1).toString())] === true) {
				uniquePaths++;
			} else {
				path.push([x, y + 1]);
				explore(x, y + 1, path);
			}
		}
	}

	explore(0, 0, []);

	return uniquePaths;

};

console.clear();

console.log(latticePaths(2));



























