
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

function kthSmallest(array, k){

	if (k > array.length) return;

  function quickHelper(start, end) {

  	if (start === end) return array[start];

    var pivot = array[start];
    var edge = start + 1;

    for (var i = start + 1; i < end; i++) {
      if (array[i] <= pivot) {
        [array[edge], array[i]] = [array[i], array[edge]];
        edge++;
      }
    }

    var mid = edge - 1;

    [array[start], array[mid]] = [array[mid], array[start]];

    console.log(array, mid)

    if (mid === k - 1) {
      return array[mid];
    } else if (mid < k) {
      return quickHelper(mid + 1, end);
    } else {
      return quickHelper(start, mid);
    }

  }

  return quickHelper(0, array.length);

};

console.clear();
var sample = [1984, 1337, 9000, 8304, 5150, 9000, 8304];

console.log(R);
var k = 5;

//console.log(sample);

console.log('\n');
console.log(kthSmallest([8304], 1));
console.log('\n');

var S = R.sort((a,b) => a - b);
console.log(S, S[k - 1]);












