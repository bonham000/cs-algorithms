
// HELPER FUNCTIONS

// check if array is sorted
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(12);

// bubble sort
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

// selection sort
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

// insertion sort
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

// quick sort
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

// merge sort
function merge(arr1, arr2) {
  let merged = new Array();
  while (arr1.length > 0 && arr2.length > 0) {
      (arr1[arr1.length - 1] > arr2[arr2.length - 1]) ? merged.unshift(arr1.pop()) : merged.unshift(arr2.pop());
      (arr1.length == 0) ? Array.prototype.unshift.apply(merged, arr2) :
      ((arr2.length == 0) ? Array.prototype.unshift.apply(merged, arr1) : null);
  };
  return merged;
};

function mergeSort(array) {
  if (array.length < 2) {
      return array;
  } else {
      let left = array.slice(0, Math.floor(array.length / 2));
      let right = array.slice(Math.floor(array.length / 2));
      return merge(mergeSort(left), mergeSort(right));
  };
};

// ------------------------------------------------------------

console.clear();
console.log('original: ', array);
console.log(isSorted(array));
console.log('bubble: ', bubbleSort(array));
console.log(isSorted(bubbleSort(array)));
console.log('selection: ', selectionSort(array));
console.log(isSorted(selectionSort(array)));
console.log('insertion: ', insertionSort(array));
console.log(isSorted(insertionSort(array)));
console.log('quick sort: ', quickSort(array));
console.log(isSorted(quickSort(array)));
console.log('merge sort: ', mergeSort(array));
console.log(isSorted(mergeSort(array)));

