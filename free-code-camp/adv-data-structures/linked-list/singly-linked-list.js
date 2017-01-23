function Node(val) {
	this.value = val;
	this.next = null;
};

function List() {
	this.head = null;
	this.add = function(val) {
		if (this.head == null) {
			this.head = new Node(val);
		} else {
			let node = this.head;
			while (node.next != null) {
				node = node.next;
			};
			node.next = new Node(val);
		};
	}
	this.print = function() {
		let R = '';
		if (this.head != null) {
			let node = this.head;
			while (node != null) {
				R += (node.value + ' ');
				node = node.next;
			};
			return R;
		}
	}
	this.findNth = function(nth) {
		let R = [];
		(function find(node) {
			R.push(node.value)
			if (node.next != null) find(node.next);
		})(this.head);
		return R[R.length - nth];
	}
	this.rmNth = function(nth) {
		let c = 0;
		let node = this.head;
		while (c != nth && node.next != null) {
			c++;
			node = node.next;
		};
		let current = node;
		let next = node.next;
		current.value = next.value;
		current.next = next.next;
		next = null;
		console.log(this.print());
	}
}