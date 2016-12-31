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


var longestCommonPrefix = function(strs) {
  if (strs == '') return '';
  if (strs.length == 1) return strs[0];
  if (strs[0].length == 0) return '';
  let pre = '';
  let dep = 0;
  let cp = null;
  for (let a = 1; a < strs.length; a++) {
  	cp = strs[0][dep];
  	if (a == 1) pre += strs[a][dep];
  	if (strs[a][dep] != cp) return pre.slice(0, dep);
  	if (a == strs.length - 1) {
  		dep++;
  		if (dep == strs[0].length) return pre;
  		a = 0;
  	}
  }
};

// test code:
console.clear();

console.log(longestCommonPrefix(['a', 'a', 'a']));







