document.write(`
<b>Title:</b> Implement Bubble Sort`)

document.write(`<br><br>
<b>Description:</b> This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be
able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches.
While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the
common basic approaches and learn how they can be implemented.<br><br>

Here we will see <b>bubble sort</b>. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values
towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping
them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.
This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While
simple, it is usually impractical in most situations.
`);

document.write(`<br><br>
<b>Instructions:</b> Write a function <code>bubbleSort</code> which takes an array of integers as input and returns an array of these
integers in sorted order. We've provided a helper method to generate a random array of integer values.
`);

// SEED CODE
// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(12);

function bubbleSort(array) {
	// change code below this line

	// change code above this line
	return array;
};

// SOLUTION CODE
function bubbleSort(array) {
	let current = 0;
	let pass = true;
	while (current < array.length) {
		let next = current + 1;
		if (current == array.length - 1 && pass) {
			break;
		} else if (current == array.length - 1 && !pass) {
			current = 0;
			pass = true;
			continue;
		} else if (current <= array.length - 2) {
			if (array[current] > array[next]) {
				[array[current], array[next]] = [array[next], array[current]];
				current++;
				pass = false;
				continue;
			} else {
				current++;
				continue;
			};
		};
	};
	return array;
};

// TAIL CODE
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// tests
console.assert(typeof bubbleSort == 'function', 'bubbleSort is a function');
console.assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), 'bubbleSort returns a sorted array');
