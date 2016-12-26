document.write(`
<b>Title:</b> Reverse a Doubly Linked List`)

document.write(`<br><br>
<b>Instructions:</b> Let's create one more method for our doubly linked list called <code>reverse</code> which reverses the list in place.
Once the method is executed the <code>head</code> should point to the previous tail and the <code>tail</code> should point to the previous
<code>head</code>. Now, if we traverse the list from head to tail we should meet the nodes in a reverse order compared to the original list.
Trying to reverse an empty list should return <code>null</code>.
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

	this.reverse = function() {
		if (this.head == null) {
			return null;
		} else {
			let node = this.head;
			let prev = null;
			while (node.next != null) {
				let next = node.next;
				if (prev == null) {
					this.tail = node;
					node.next = null;
				} else {
					prev.prev = node;
					node.next = prev;
				}
				prev = node;
				node = next;
			};
			prev.prev = node;
			node.next = prev;
			node.prev = null;
			this.head = node;
		};
	};

};

// TAIL CODE 
DoublyLinkedList.prototype = {
	add(data) {
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
	},
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

// TESTS
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (typeof test == 'object')})(), 'The DoublyLinkedList data structure exists.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.add == undefined) { return false; }; return (typeof test.add == 'function')})(), 'The DoublyLinkedList has a method called add.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; if (test.reverse == undefined) { return false; }; return (typeof test.reverse == 'function')})(), 'The DoublyLinkedList has a method called reverse.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; return (test.reverse() == null); })(), 'Reversing an empty list returns null.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(58); test.add(61); test.add(32); test.reverse(); return (test.print().join('') == '326158'); })(), 'The reverse method reverses the list.');
assert((function() { let test = false; if (typeof DoublyLinkedList !== 'undefined') { test = new DoublyLinkedList() }; test.add(11); test.add(22); test.add(33); test.reverse(); return (test.printReverse().join('') == '112233'); })(), 'The next and previous references are correctly maintained when a list is reversed.');


