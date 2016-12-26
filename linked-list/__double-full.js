
let Node = function(data, prev) {
	this.data = data;
	this.prev = prev;
	this.next = null;
};

let LinkedList = function() {

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
			let newNode = new Node(data, prev);
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
			node.next = prev;
			node.prev = null;
			this.head = node;
		};
	};

	this.print = function() {
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
	};

};

let List = new LinkedList();

console.clear();

List.add(1);
List.add(2);
List.add(3);
List.add(4);
List.add(5);
List.add(6);
List.add(7);
List.add(8);

console.log(List.print());
List.reverse();
console.log(List.print());
console.log(List)
