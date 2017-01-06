
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
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(15);

let sorted = R.sort((a, b) => a - b);

let Node = function(int) {
	this.value = int;
	this.next = null;
};

function MinStack() {
	this.stack = [];
	this.minimum = [];
	this.push = function(value) {
		this.stack.push(value);
		if (this.minimum.length == 0) {
			this.minimum.push(value);
		} else {
			let min = this.minimum[this.minimum.length - 1];
			if (value <= min) {
				this.minimum.push(value);
			} else {
				this.minimum.push(min);
			}
		}
	};
	this.pop = function() {
		this.minimum.pop();
		return this.stack.pop();
	};
	this.min = function() {
		return this.minimum.pop();
	};
	this.peek = function() {
		return this.stack[this.stack.length - 1];
	};
};

console.clear();

let S = new MinStack();

S.push(5);
S.push(15);
S.push(3);
S.push(12);
S.push(17);
S.push(4);

console.log(S)

console.log(S.peek());
console.log(S.pop());
console.log(S.pop());
console.log(S.min());




























