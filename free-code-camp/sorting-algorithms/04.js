document.write(`
<b>Title:</b> Implement Quick Sort`)

document.write(`<br><br>
<b>Description:</b> Here we will move on to an intermediate sorting algorithm: <b>quick sort</b>. Quick sort is an
efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in
the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot
value. We then combine the result of recursively calling the quick sort algorithm on both sub arrays. This continues
until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return
us the sorted array.<br><br>

Quick sort is a very efficient sorting method, providing O(<i>n</i>log(<i>n</i>)) performance on average. It is
also relatively easy to implement. These attributes make it a popular, performant sorting method.
`);

document.write(`<br><br>
<b>Instructions:</b> Write a function <code>quickSort</code> which takes an array of integers as input and returns an array of these
integers in sorted order. While the choice of the pivot value is important, any pivot will do for our purposes here. For
simplicity, the first or last element could be used.
`);

// SEED CODE
// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(50);

function quickSort(array) {
	// change code below this line

	// change code above this line
	return array;
};

// SOLUTION CODE
function quickSort(array) {
	if (array.length == 1) {
		return array;
	} else {
		let index = array.length - 1;
		let pivot = array[index];
		array.splice(index, 1);
		let lesser = new Array();
		for (let i = 0; i < array.length; i++) {
			if (array[i] <= pivot) {
				let val = array.splice(i, 1);
				lesser.push(val[0]);
				i--;
			};
		};
		let border = lesser.length;
		let ordered = [...lesser, pivot, ...array];
		let left = ordered.slice(0, border);
		let right = ordered.slice(border);
		if (left.length != 0 && right.length != 0) {
			return [...quickSort(left), ...quickSort(right)];
		} else if (left.length == 0 && right.length > 0) {
			return [...quickSort(right)];
		} else {
			return [...quickSort(left)];
		};
	};
};

// TAIL CODE
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// TESTS
assert(typeof quickSort == 'function', 'quickSort is a function');
assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), 'quickSort returns a sorted array');
