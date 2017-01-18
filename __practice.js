
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

// helper function to generate a promise which may resolve or reject on a random basis
function generatePromise() {
	return new Promise((resolve, reject) => {
		var resolved = false;
		setTimeout(() => {
			resolved = true;
			resolve('Great!');
		}, Math.floor(2000 - (Math.random() * 1000)));
		setTimeout(() => {
			if (!resolved) reject('rejected...');
		}, 1900);
	});
}

// promise.all implementation
// takes an array of promises as input and returns an array of the fulfilled values if all resolve
// if any promises reject immediately rejects and reports which promise failed
function promiseAll(promises) {
	return new Promise(function(resolve, reject) {
		var results = [];
		var unresolved = promises.length;
		function handlePromise(promise, idx) {
			promise.then(response => {
				unresolved--;
				results[idx] = `Promise ${idx + 1} fulfilled: ${response}`;
				if (unresolved === 0) resolve(results);
			}).catch(err => {
				results[idx] = err;
				reject(`Promise ${idx} failed...`);
			});
		}
		promises.forEach((promise, i) => handlePromise(promise, i));
	});
}

// generate an array of example promises
var promises = [];
var n = 0;
while (n < 5) {
	promises.push(generatePromise());
	n++;
}

var allPromises = promiseAll(promises)

allPromises.then(fulfillment => {
	// logs array of all fulfilled values if all fulfill
	fulfillment.forEach(msg => console.log(msg));
}).catch(err => {
	// if any fail, immediately rejects and reports which failed
	console.log(err);
});












