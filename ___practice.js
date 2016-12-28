"use strict"

// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	console.log(result);
};

// generate a random array:
let R = [];
(function gen(n) {
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(8);


var twoSum = function(nums, target) {
    if (!Array.isArray(R) || R.length == 0) return null;
    let result = [];
    for (let a = 0; a < nums.length; a++) {
    	result[0] = a;
    	for (let b = a + 1; b < nums.length; b++) {
    		if (nums[a] + nums[b] == target) {
    			result[1] = b;
    			return result;
    		}
    	}
    }
    return [-1];
};

function twoSum2(R, target) {
	if (!Array.isArray(R) || R.length == 0) return null;
  let ans = [-1];
	let store = new Map();
	R.forEach((v, i) => {
		store.set(v, i);
		let diff = target - v;
		if (store.has(diff)) ans = [store.get(diff), i];
	});
	return ans;
};

// test code:
console.clear();

console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([2,10], 9));
console.log(twoSum2({}, 9));

console.assert(twoSum2([2,7,11,15], 9).join('') == '01', 'The function returns the correct answer.');
console.assert(twoSum2([5,5], 7), [-1], 'The function returns [-1] if the sum can\'t be achieved.');
console.assert(twoSum2([], 10) == null, 'The function returns null when passed an empty array.');
console.assert(twoSum2({}, 10) == null, 'The function returns null when not passed an array.');




