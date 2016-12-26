document.write(`
<b>Title:</b> Implement Insertion Sort`)

document.write(`<br><br>
<b>Description:</b> The next sorting method we'll look at is <b>insertion sort</b>. This method works by building up a
sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next
element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating
through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has
quadratic time complexity in the average and worst cases.
`);

document.write(`<br><br>
<b>Instructions:</b> Write a function <code>insertionSort</code> which takes an array of integers as input and returns an array of these
integers in sorted order.
`);

// SEED CODE
// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(12);

function insertionSort(array) {
	// change code below this line

	// change code above this line
	return array;
};

// SOLUTION CODE
function insertionSort(array) {
	let sortLine = 0;
	while (sortLine < array.length - 1) {
		let toSort = array[sortLine + 1];
		let backtrack = sortLine;
		while (toSort < array[backtrack]) {
			[array[backtrack], array[backtrack + 1]] = [array[backtrack + 1], array[backtrack]];
			backtrack--;
		};
		sortLine++;
	};
	return array;
};


// TAIL CODE
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// tests
console.assert(typeof insertionSort == 'function', 'insertionSort is a function');
console.assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), 'insertionSort returns a sorted array');
