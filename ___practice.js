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

var reverse = function(x) {
    let sign = false;
    x = x.toString();
    if (x[0] === '-') {
        sign = true;
        x = x.toString().slice(1);
    };
    let ans = x.split('').reverse().join('');
    return (sign) ? Number(ans) * -1 : Number(ans);
};


// test code:
console.clear();
console.log(reverse(-1534236469));








