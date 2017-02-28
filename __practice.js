
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
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

console.clear();

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  wide() {
      return 5;
  }
  tall = () => {
    return 15
  }
}

var R = new Rectangle();
console.log(R.tall());

