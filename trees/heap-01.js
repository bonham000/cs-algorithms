document.write(`
<b>Title:</b> Insert an Element into a Max Heap`)

document.write(`<br><br>
<b>Description:</b> Now we will move on to another tree data structure, the <b>binary heap</b>. A binary heap is a partially ordered
binary tree which satisfies the <i>heap</i> property. The heap property specifies a relationship between parent and child nodes.
You may have a <i>max heap</i>, in which all parent nodes are greater than or equal to their child nodes, or a <i>min heap</i>, in
which the reverse is true. Binary heaps are also <i>complete</i> binary trees. This means that all levels of the tree are fully filled
and if the last level is partially filled it is filled from left to right.

<br><br>

While binary heaps may be implemented as tree structures with nodes that contain left and right references, the partial ordering according
to the heap property allows us to represent the heap with an array. The parent-children relationship is what we're interested in
and with simple arithmetic we can compute the children of any parent and the parent of any child node.


For instance, consider this array representation of a binary max heap:<br><br>

<code>[ 6, 22, 30, 37, 63, 48, 42, 76 ]</code>

<br><br>

The root node is the first element, <code>6</code>. Its children are <code>22</code> and <code>30</code>. If we look at the relationship
between the array indices of these values, for index <code>i</code> the children are <code>2 * i + 1</code> and <code>2 * i + 2</code>.
Similarly, the element at index <code>0</code> is the parent of these two children at indices <code>1</code> and <code>2</code>. More
generally, we can find the parent of a node at any index with the following: <code>i - 1 / 2</code>. These patterns will hold true as the binary tree grows to any size.
Finally, we can make a slight adjustment to make this arithmetic even easier by skipping the first element in the array. Doing this creates the
following relationship for any element at a given index <code>i</code>:<br><br>

Example Array representation: <code>[ null, 22, 30, 37, 63, 48, 42, 76 ]</code><br>
An element's left child: <code>i * 2</code><br>
An element's right child: <code>i * 2 + 1</code><br>
An element's parent: <code>i / 2</code><br>

<br>

Once you wrap your head around the math, using an array representation is very useful because node locations can be quickly determined with
this arithmetic and memory usage is diminished because you don't need to maintain references to child nodes.
`);

document.write(`<br><br>
<b>Instructions:</b> Here we will create a max heap. Start by just creating an <code>insert</code> method which adds elements to our heap.
During insertion, it is important to always maintain the heap property. For a max heap this means the root element should always have the
greatest value in the tree and all parent nodes should be greater than their children.
For an array implementation of a heap, this is typically accomplished in three steps:

<br><br>

1) Add the new element to the end of the array.<br>
2) If the element is larger than its parents, switch them.<br>
3) Continue switching until the new element is either smaller than its parent or you reach the root of the tree.<br>

<br>

Finally, add a <code>print</code> method which returns an array of all the items that have been added to the heap.
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

};

// TESTS
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() }; return (typeof test == 'object')})(), 'The MaxHeap data structure exists.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.insert == 'function')})(), 'MaxHeap has a method called insert.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; return (typeof test.print == 'function')})(), 'MaxHeap has a method called print.');
assert((function() { let test = false; if (typeof MaxHeap !== 'undefined') { test = new MaxHeap() } else { return false; }; test.insert(50); test.insert(100); test.insert(700); test.insert(32); test.insert(51); let result = test.print(); return ((result.length == 5) ? result[0] == 700 : result[1] == 700) })(), 'The insert method adds elements according to the max heap property.');



