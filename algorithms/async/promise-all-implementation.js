// helper function to generate a promise which may resolve or reject on a random basis
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

// promise.all implementation
// takes an array of promises as input and returns an array of the fulfilled values if all resolve
// if any promises reject immediately rejects and reports which promise failed
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

// generate an array of example promises
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