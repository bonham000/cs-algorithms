document.write(`
<b>Title:</b> Remove an Element from a Max Heap`)

document.write(`<br><br>
<b>Description:</b> Now that we can add elements to our heap let's see how we can remove elements. Removing and inserting
elements both require similar logic. In a max heap you will usually want to remove the greatest value, so this involves
simply extracting it from the root of our tree. This will break the heap property of our tree, so we must reestablish it in
some way. Typically, for a max heap this is done in the following way:

<br><br>

1) Move the last element in the heap into the root position.<br>
2) If either child of the root is greater than it, swap the root with the child of greater value.<br>
3) Continue swapping until the parent is greater than both children, or you reach the last level in the tree.
`);

document.write(`<br><br>
<b>Instructions:</b> Add a method to our max heap called <code>remove</code>. This method should return the greatest
value that has been added to our max heap and remove it from the heap. It should also reorder the heap so the heap
property is maintained. After removing an element, the next greatest element remaining in the heap should become
the root. Add your <code>insert</code> method again here as well.
`);

// SEED CODE
let MaxHeap = function() {
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let MaxHeap = function() {
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
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
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
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
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})(), 'The MaxHeap data structure exists.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})(), 'MaxHeap has a method called print.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})(), 'MaxHeap has a method called insert.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.remove == 'function')})(), 'MaxHeap has a method called remove.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(30); test.insert(300); test.insert(500); test.insert(10); let result = []; result.push(test.remove()); result.push(test.remove()); result.push(test.remove()); result.push(test.remove());  return (result.join('') == '5003003010') })(), 'The remove method removes the greatest element from the max heap while maintaining the max heap property.');
