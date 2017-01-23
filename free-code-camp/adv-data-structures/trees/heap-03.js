document.write(`
<b>Title:</b> Implement Heap Sort with a Min Heap`)

document.write(`<br><br>
<b>Description:</b> Now that we can add and remove elements let's see some of the applications heaps can be used for. Heaps are commonly used
to implement priority queues because they always store an item of greatest or least value in first position. In addition, they are used
to implement a sorting algorithm called heap sort. We'll see how to do this here. Heap sort uses a min heap, the reverse of a max
heap. A min heap always stores the element of least value in the root position.<br><br>

Heap sort works by taking an unsorted array, adding each item in the array into a min heap, and then extracting every item out
of the min heap into a new array. The min heap structure ensures that the new array will contain the original items in least
to greatest order. This is one of the most efficient sorting algorithms with average and worst case performance of O(<i>n</i>log(<i>n</i>)).
`);

document.write(`<br><br>
<b>Instructions:</b> Let's implement heap sort with a min heap. Feel free to adapt your max heap code here. Create an object
<code>MinHeap</code> with <code>insert</code>, <code>remove</code>, and <code>sort</code> methods. The <code>sort</code>
method should return an array of all the elements in the min heap sorted from smallest to largest.
`);

// HELPER CODE
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
})(25);

// SEED CODE
let MinHeap = function() {
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let MinHeap = function() {
	
	let heap = [null];
	
	this.print = () => console.log(heap);
	
	this.sort = function() {
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove());
		};
		return result;
	};
	
	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] < heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

// TESTS
assert((function() { let test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() }; return (typeof test == 'object')})(), 'The MinHeap data structure exists.');
assert((function() { let test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.insert == 'function')})(), 'MinHeap has a method called insert.');
assert((function() { let test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.remove == 'function')})(), 'MinHeap has a method called remove.');
assert((function() { let test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; return (typeof test.sort == 'function')})(), 'MinHeap has a method called sort.');
assert((function() { let test = false; if (typeof MinHeap !== 'undefined') { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); let result = test.sort(); return (isSorted(result)); })(), 'The sort method returns an array containing all items added to the min heap in sorted order.');