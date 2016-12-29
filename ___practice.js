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

function longestSubString(s) {
  let len = 0;
  let record = [];
  for (let i = 0; i < s.length; i++) {
    let idx = record.indexOf(s[i]);
    if (idx != -1) {
      record = record.slice(idx + 1);
    }
    record.push(s[i]);
    if (record.length > len) len = record.length;
  }
  return len;
}

// test code:
console.clear();

console.log(longestSubString('pwwkew'));

console.assert(longestSubString('abcabcbb') == 3, 'Test 1 failed');
console.assert(longestSubString('bbbbb') == 1, 'Test 2 failed');
console.assert(longestSubString('pwwkew') == 3, 'Test 3 failed');
console.assert(longestSubString('') == 0, 'Test 4 failed');








