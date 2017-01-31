
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

function permutation(str) {
  var store = [];
  function permute(s, p = '') {
    if (p.length === str.length) {
      store.push(p);
    } else {
      for (var i in s) {
        permute((s.slice(0, i) + s.slice(+i + 1)), p.concat(s[i]));
      }
    }
  }
  permute(str);
  return store;
}

console.clear();

console.log(permutation('aaa'));


