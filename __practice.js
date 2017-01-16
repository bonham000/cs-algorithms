
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

function latticePaths(n) {
	var paths = 0;
	var seeker = {
		right: 0,
		down: 0
	};
	function search(position) {
		let fork = Object.assign({}, position);
		if (position.right < n) {
			position.right++;
			if (position.right == n && position.down == n) {
				paths++;
			} else {
				search(position);
			}
		}
		if (fork.down < n) {
			fork.down++;
			if (fork.right == n && fork.down == n) {
				paths++;
			} else {
				search(fork);
			}
		}
	}
	search(seeker);
	return paths;
}

console.clear();
console.log('hello')
console.log(latticePaths(4))



