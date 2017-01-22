
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
	while (R.length < n) R.push(+(Math.random()).toFixed(2));
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

function kthSmallest(array, k){

  function quickHelper(start, end) {

    var pivot = array[start];
    var edge = start + 1;

    for (var i = start + 1; i < end; i++) {
      if (array[i] <= pivot) {
        [array[edge], array[i]] = [array[i], array[edge]];
      }
    }

    var mid = edge - 1;

    [array[0], array[mid]] = [array[mid], array[i]];

    if (mid === k) {
      return array[mid];
    } else if (mid < k) {
      quickHelper(mid + 1, end);
    } else {
      quickHelper(start, mid);
    }

  }

  return quickHelper(0, array.length - 1);

};

console.clear();
console.log(R);
//console.log(bucketSort(R));











