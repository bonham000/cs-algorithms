
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

/* here is my solution for the valley flood problem:
-------------------------------------------------------------- */

// this solution iterates through the array of height data and
// establishes left and right boundaries that mark valleys
// then, it computes the maximum height for each valley and
// calculates the volume within, accumulating this in a total
// volume variable which is returned

// this algorithm will operate in linear time, O(n), and
// requires constant memory, O(1).

function valleyFlood(array) {

	// this will track the boundaries for one (or more) valleys we encounter
	let bounds = [];

	// track left and right valley bound
	let leftBound = null;
	let rightBound = null;

	// iterate through the array, establish left/right boundaries for valleys
	for (let i = 0; i < array.length; i++) {
		if (array[i + 1] < array[i] && leftBound === null) {
			leftBound = i;
		}
		if (array[i + 1] > array[i]) {
			rightBound = i;
			if (array[i + 1] >= array[leftBound]) {
				// multiplte valleys could exists, so once we have found one valley
				// we will reset the bounds in case we find another
				bounds.push([leftBound, rightBound + 1]);
				leftBound = null;
				rightBound = null;
			}
		}
	}

	// handle some edge cases near the right edge
	if (rightBound != null) bounds.push([leftBound, rightBound + 1]);

	let volume = 0;

	// helper function to calculate volume based on left and right bounds
	// this determines maximum height and then calculates the enclosed volume
	function calculateVolume(left, right) {	
		let height = (array[left] < array[right]) ? array[left] : array[right];
		for (let i = left; i < right; i++) {
			if (array[i] < height) {
				volume += height - array[i];
			}
		}
	}

	// calculate the total volume for each valley we found
	bounds.forEach(bounds => calculateVolume(bounds[0], bounds[1]));

	// return the total accumulated volume
	return volume;

}

console.clear();

var example = [2, 4, 5, 2, 3, 4, 6, 6, 5]; // should return 6 units
var valley1 = [2, 4, 5, 2, 3, 4, 6, 6, 4, 5]; // should return 7 units
var valley2 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9]; // should return 20 units
var valley3 = [3, 2, 1, 2]; // should return 1 units
var valley4 = [5, 4, 3, 2, 1, 5]; // should return 10 units
var valley5 = [5, 1, 2, 3, 4, 5]; // should return 10 units

// this valley6 includes an edge case not included in the above examples
// here a valley is deeper than 1 unit from its neighbors
var valley6 = [9, 8, 7, 6, 4, 4, 6, 7, 8, 9]; // should return 22 units

console.log('Example:',  valleyFlood(example));
console.log('Valley 1:', valleyFlood(valley1));
console.log('Valley 2:', valleyFlood(valley2));
console.log('Valley 3:', valleyFlood(valley3));
console.log('Valley 4:', valleyFlood(valley4));
console.log('Valley 5:', valleyFlood(valley5));
console.log('Valley 6:', valleyFlood(valley6));





















