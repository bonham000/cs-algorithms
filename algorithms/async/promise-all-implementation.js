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