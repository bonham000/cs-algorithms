
"use strict"

// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	//console.log(result);
};

// generate a random array:
let R = [];
(function gen(n) {
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(5000000);

let sorted = R.sort((a, b) => a - b);

var sortedToBinaryTree = function(array) {
  let result = [];
  function processData(arr) {
    if (arr.length == 0) return;
    let mid = Math.floor(arr.length / 2);
    result.push(arr[mid]);
    if (arr.length > 0) {
      processData(arr.slice(0, mid));
      processData(arr.slice(mid + 1));
    }
  };
  processData(array);
  return result;
};

var sortedToBinaryTreeInPlace = function(array) {
  let result = [];
  function processData(B, E) {
    let M = Math.floor((E - B) / 2) + B;
    result.push(array[M]);
    if (M - B > 0) processData(B, M - 1);
    if (E - M > 0) processData(M + 1, E);
  };
  processData(0, array.length - 1);
  return result;
};

// test code:
console.clear();
//console.log(R);
timeFn(sortedToBinaryTree, sorted);
timeFn(sortedToBinaryTreeInPlace, sorted);







