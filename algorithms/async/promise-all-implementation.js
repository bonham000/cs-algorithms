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

// —————————————————————————————————————————————————————————————————————
// using harder to read recursive function to generate array of promises

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
