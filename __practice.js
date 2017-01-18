
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







console.clear();

function generatePromises(curr = 0, limit = 10, promises = []) {
	if (curr === limit) return promises;
	return generatePromises(curr + 1, limit, promises.concat(new Promise((resolve, reject) => {
		var resolved = false;
		var data = { points: [1,2,3,4,5] };
		setTimeout(() => {
			resolved = true;
			resolve(data);
		}, 2000 - Math.floor(Math.random() * 1000));
		setTimeout(() => {
			if (!resolved) reject('Error!');
		}, 1500);
	})));
};

function promiseAll(promises) {
	return new Promise(function(resolve, reject) {
		var fulfilled = 0;
		var results = [];
		var remaining = promises.length;
		function handleResolution() {
			var data = {
				results,
				fulfilled,
				total: promises.length,
			}
			resolve(data);
		}
		function handlePromise(promise, idx) {
			promise.then(res => {
				remaining--;
				fulfilled++;
				results[idx] = 'Promise number ' + (idx + 1) + ': ' + JSON.stringify(res);
				if (remaining === 0) handleResolution();
			}).catch(err => {
				remaining--;
				results[idx] = 'Promise number ' + (idx + 1) + ' failed!';
				if (remaining === 0) handleResolution();
			});
		}
		promises.forEach((promise, idx) => handlePromise(promise, idx));
	});
};

var all = promiseAll(generatePromises());

all.then(response => {
	console.log(response);
	console.log(response.fulfilled + ' promises out of ' + response.total + ' fulfilled (' + (100 * (response.fulfilled / response.total)) + '%); results:');
	response.results.forEach(msg => console.log(msg));
}).catch(err => {
	console.log(err);
});
























