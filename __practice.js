
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
})(15);

let sorted = R.sort((a, b) => a - b);

var permutations = function(str) {
  
  let powerSet = {};

  function addToSet(s) {
    let conversion = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 1) conversion += str[i];
      if (i == s.length - 1) powerSet[conversion] = true;
    };
  };

  (function generateBinary(b) {
    if (b.length == str.length) {
      addToSet(b);
      return;
    } else {
      generateBinary(b + '0');
      generateBinary(b + '1');
    };
  })('');

  return Object.keys(powerSet);

};

function powerSet(string) {

  let powerSet = {};

  function buildSet(s = '', i = 0) {
    if (i == string.length) {
      powerSet[s] = true;
    } else {
      buildSet(s + string[i], i + 1);
      buildSet(s, i + 1); 
    };
  };

  buildSet();

  return Object.keys(powerSet);

};
``
// test code:
console.clear();
console.log(permutations('abc'));
console.log(powerSet('abc'));





