"use strict"

// factorial by recursion
const factorialByRecursion = function(num) {
	if (num == 0) {
		return 1;
	}
	return num * factorialByRecursion(num - 1);
};

// factorial with array.reduce
const factorialByReduce = function(num) {
	let numbers = new Array();
	while (num > 0) {
		numbers.push(num);
		num--;
	}
	return numbers.reduce((a, b) => {
		return a * b;
	});
};

timeFn(factorialByRecursion, 25);
timeFn(factorialByReduce, 25);




