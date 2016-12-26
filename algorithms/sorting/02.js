document.write(`
<b>Title:</b> Implement Selection Sort`)

document.write(`<br><br>
<b>Description:</b> Here we will implement <b>selection sort</b>. Selection sort works by selecting the minimum value in a
list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the
remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it
reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.
`);

document.write(`<br><br>
<b>Instructions:</b> Write a function <code>selectionSort</code> which takes an array of integers as input and returns an array of these
integers in sorted order.
`);

// SEED CODE
// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(12);

function selectionSort(array) {
	// change code below this line

	// change code above this line
	return array;
};

// SOLUTION CODE
function selectionSort(array) {
	function findSmallestIndex(currentIndex, value, index) {
		if (array[currentIndex] < value) {
			value = array[currentIndex];
			index = currentIndex;
		}
		return (currentIndex < array.length - 1) ? findSmallestIndex(currentIndex + 1, value, index) : index;
	}
	let line = 0;
	while (line < array.length - 1) {
		let replacementIndex = findSmallestIndex(line, array[line], line);
		[array[line], array[replacementIndex]] = [array[replacementIndex], array[line]];
		line++;
	};
	return array;
};

// TAIL CODE
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// tests
console.assert(typeof selectionSort == 'function', 'selectionSort is a function');
console.assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), 'selectionSort returns a sorted array');
