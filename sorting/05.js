document.write(`
<b>Title:</b> Implement Merge Sort`)

document.write(`<br><br>
<b>Description:</b> Another intermediate sorting algorithm that is very common is <b>merge sort</b>. Like quick sort,
merge sort also uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that
it is relatively easy to sort two arrays as long as each is sorted in the first place. But we'll start with only one array as input, so how
do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of
an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the
recursive calls that split the original array, eventually producing a final sorted array of all the elements. The steps of merge sort, then, are:

<br><br>

1) Recursively split the input array in half until a sub-array with only one element is produced.<br>
2) Merge each sorted sub-array together to produce the final sorted array.<br><br>

Merge sort is an efficient sorting method, with time complexity of O(<i>n</i>log(<i>n</i>)). This algorithm is popular
because it is performant and relatively easy to implement.

<br><br>

As an aside, this will be the last sorting algorithm we cover here. However,
later in the section on tree data structures we will describe <i>heap sort</i>, another efficient sorting method that requires
a binary heap in its implementation.
`);

document.write(`<br><br>
<b>Instructions:</b> Write a function <code>mergeSort</code> which takes an array of integers as input and returns an array of these
integers in sorted order. A good way to implement this is to write one function, for instance <code>merge</code>, which is
responsible for merging two sorted arrays, and another function, for instance <code>mergeSort</code>, which is responsible
for the recursion that produces single-item arrays to feed into <code>merge</code>. Good luck!
`);

// SEED CODE
// generate a randomly filled array
let array = new Array();
(function createArray(size = 5) {
	array.push(+(Math.random() * 100).toFixed(0));
	return (size > 1) ? createArray(size - 1) : undefined;
})(25);

// change code below this line

// SOLUTION CODE
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

// TAIL CODE
function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// TESTS
assert(typeof mergeSort == 'function', 'mergeSort is a function');
assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), 'mergeSort returns a sorted array');
