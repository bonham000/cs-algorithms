
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

function genPromise() {
	return new Promise((resolve, reject) => {
		let resolved = false;
		let time = Math.round(2000 - Math.random() * 1000);
		setTimeout(() => {
			resolved = true;
			resolve(`Resolved in ${time} milliseconds!`);
		}, time);
		setTimeout(() => {
			if (!resolved) reject('Rejected...');
		}, 1950);
	})
};

function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		var fulfillment = [];
		var remaining = promises.length;
		function handlePromise(promise, i) {
			promise.then(result => {
				remaining--;
				fulfillment[i] = `Promise ${i + 1}: ${result}`
				if (remaining === 0) resolve(fulfillment);
			}).catch(err => {
				reject(`Promise #${i + 1} failed: ${err}`);
			});
		};
		promises.forEach((promise, i) => handlePromise(promise, i));
	});
};

var promises = [];
var n = 0;
while (n < 10) {
	promises.push(genPromise());
	n++;
};

var allPromises = promiseAll(promises);

allPromises.then(res => {
	res.forEach(data => console.log(data));
}).catch(err => {
	console.warn(err);
});
















