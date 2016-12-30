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

var isValid = function(s) {
  if (s.length % 2 != 0) return false;
  let O = [];
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char == '(' || char == '[' || char == '{' ) {
          O.push(char);
      } else {
          let cp = O[O.length - 1];
          if (cp == '(' && char != ')' || cp == '[' && char != ']' || cp == '{' && char != '}') {
            return false;
          } else {
            O.pop();
          };
      };
  };
  return (O.length > 0) ? false : true;
};

// test code:
console.clear();

console.log(isValid(']'));
//console.log(isValid('((('));




