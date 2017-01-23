
"use strict";

//console.clear();

function generatePromiseArray(n) {
	var promises = [];
	var curr = 0;
	while (curr < n) {
		var promise = new Promise((resolve, reject) => {
			var resolved = false;
			setTimeout(() => {
				resolved = true;
				resolve('promise fulfilled');
			}, (2000 - Math.random() * 1000));
			setTimeout(() => {
				if (!resolved) reject('promise rejected');
			}, 1900);
		});
		promises.push(promise);
		curr++;
	}
	return promises;
};

function handleAllPromises(array) {
	return new Promise((resolve, reject) => {
		var results = [];
		var fulfilled = 0;
		function handlePromise(promise, idx) {
			promise.then((data) => {
				fulfilled++;
				results[idx] = ('Promise ' + (idx + 1) + ' fulfilled: ' + data);
				if (fulfilled === array.length) resolve(results);
			}).catch((err) => {
				fulfilled++;
				results[idx] = ('Promise ' + (idx + 1) + ' failed: ' + err);
				if (fulfilled === array.length) resolve(results);
			});
		};
		array.forEach((promise, idx) => {
			results.push(handlePromise(promise, idx));
		});
	});
}

handleAllPromises(generatePromiseArray(150)).then(res => {
	console.log('All promises resolved!');
	res.forEach((data) => console.log(data));
}).catch(err => {
	console.log(err);
});



