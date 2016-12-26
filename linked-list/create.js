document.write(`
<b>Title:</b> Create a Doubly Linked List`)

document.write(`<br><br>
<b>Description:</b> All of the linked lists we've created so far are singly linked lists. Here, we'll create
a doubly linked list. As the name implies, nodes in a doubly linked list have references to the <i>next</i> and
<i>previous</i> node in the list. This allows us to traverse the list in both directions but it also requires more
memory to be used because every node must contain an additional reference to the previous node in the list.
`);

document.write(`<br><br>
<b>Instructions:</b> We've provided a <code>Node</code> object and started our <code>DoublyLinkedList</code>. Let's
add two methods to our doubly linked list called <code>add</code> and <code>remove</code>. The <code>add</code> method
should accept integers or strings and add them to the list and <code>remove</code> should accept an integer or string
and remove all copies of this integer or string that exist in the list. Be careful to handle any possible edge cases
when writing these methods, such as deletions for the first or last element. Also, removing any item on an empty list should
return <code>null</code>.<br><br>

Note that since we can traverse the list backwards, we can now track the <code>tail</code> of the list. The tail should
refer to the element most recently added.
`);

// SEED CODE
let Node = function(data, prev) {
	this.data = data;
	this.prev = prev;
	this.next = null;
};

let DoublyLinkedList = function() {

	this.head = null;
	this.tail = null;

	// change code below this line

	// change code above this line
	
};

// SOLUTION CODE
let Node = function(data, prev) {
	this.data = data;
	this.prev = prev;
	this.next = null;
};

let DoublyLinkedList = function() {

	this.head = null;
	this.tail = null;

	this.add = function(data) {
		if (this.head == null) {
			this.head = new Node(data, null);
			this.tail = this.head;
		} else {
			let node = this.head;
			let prev = null;
			while (node.next != null) {
				prev = node;
				node = node.next;
			};
			let newNode = new Node(data, node);
			node.next = newNode;
			this.tail = newNode;
		};
	};

	this.remove = function(data) {
		if (this.head == null) {
			return null;
		} else {
			let node = this.head;
			let prev = null;
			while (node.next != null) {
				if (node.data == data) {
					let nextNode = node.next;
					if (prev == null) {
						nextNode.prev = null;
						this.head = nextNode;
						node = nextNode;
					} else {
						prev.next = nextNode;
						nextNode.prev = prev;
						node = nextNode;
					}
				} else {
					prev = node;
					node = node.next;
				};
			};
			if (node.data == data) {
				prev.next = null;
				this.tail = prev;
			};
		};
	};

};

// tail code
DoublyLinkedList.prototype = {
	print() {
		if (this.head == null) {
			return null;
		} else {
			let result = new Array();
			let node = this.head;
			while (node.next != null) {
				result.push(node.data);
				node = node.next;
			};
			result.push(node.data);
			return result;
		};
	},
	printReverse() {
		if (this.tail == null) {
			return null;
		} else {
			let result = new Array();
			let node = this.tail;
			while (node.prev != null) {
				result.push(node.data);
				node = node.prev;
			};
			result.push(node.data);
			return result;
		};
	}	

};

// tests
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})(), 'The DoublyLinkedList data structure exists.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})(), 'The DoublyLinkedList has a method called add.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.remove == undefined) { return false; }; return (typeof test.remove == 'function')})(), 'The DoublyLinkedList has a method called remove.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.remove(100) == null); })(), 'Removing an item from an empty list returns null.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(5); test.add(6); test.add(723); return (test.print().join('') == '56723'); })(), 'The add method adds items to the list.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(50); test.add(68); test.add(73); return (test.printReverse().join('') == '736850'); })(), 'Each node keeps track of the previous node.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(25); return ( test.print().join('') == '3560' ) })(), 'The first item can be removed from the list.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(25); test.add(35); test.add(60); test.remove(60); return ( test.print().join('') == '2535' ) })(), 'The last item can be removed from the list.');



