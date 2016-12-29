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


function convert(s, r) {
  let len = s.length;
  let half = Math.floor(r / 2);
  let row = 0;
  let M = [];
  while (s.length > 0) {
    if (row == 0) {
      M.push(s.slice(0, r));
      s = s.slice(r);
    } else {
      M.push(s.slice(0, half));
      s = s.slice(half);
    }
    (row == 1) ? row = 0 : row++;
  }
  let ans = '';
  row = 0;
  while (ans.length < len) {
    let str = '';
    if (row == 0) {
      M.forEach((s, i) => {
        if (i % 2 == 0) {
          if (s[0] !== undefined) {
            str += s[0];
            s = s.slice(1);
            M[i] = s;
          }
        }
      });
    } else {
      M.forEach((s, i) => {
        str += s[0];
        s = s.slice(1);
        M[i] = s;
      });
    }
    ans += str;
    (row == 1) ? row = 0 : row++;
  };
  return ans;
};


// test code:
console.clear();
console.log(convert("ABC", 2));
console.log(convert("PAYPALISHIRING", 3));
// console.assert(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");






