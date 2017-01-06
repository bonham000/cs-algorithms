
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

let reverseList = function(list) {
	let node = list;
	let prev = null;
	let next = node.next;
	while (node != null) {
		next = node.next;
		node.next = prev;
		prev = node;
		node = next;
	};
	return prev;
};

console.clear();

let list = new Node(5);
let node2 = new Node(12);

list.next = node2;

let node3 = new Node(15);

node2.next = node3;

console.log(list);

console.log(reverseList(list));

















