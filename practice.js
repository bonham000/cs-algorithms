
function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
};

function BinarySearchTree() {
	this.root = null;
	this.add = function(val) {
		if (this.root == null) {
			this.root = new Node(val);
		} else {
			let node = this.root;
			while (node != null) {
				if (val <= node.value) {
					if (node.left != null) {
						node = node.left;
					} else {
						node.left = new Node(val);
						break;
					}
				} else {
					if (node.right != null) {
						node = node.right;
					} else {
						node.right = new Node(val);
						break;
					}
				}
			}
		}
	};
	this.isSym = function(node = this.root) {
		if (node.left == null && node.right == null) return true;
		if (node.left == null || node.right == null) return false;
		return this.isSym(node.left) && this.isSym(node.right);
	};
	this.invert = function(node = this.root) {
		if (node == null) return;
		[node.left, node.right] = [node.right, node.left];
		this.invert(node.left);
		this.invert(node.right);
	};
	this.isBalanced = function() {
		let findMax = (node = this.root) => {
			if (node == null) return -1;
			let L = findMax(node.left);
			let R = findMax(node.right);
			return (L > R) ? L + 1 : R + 1
		};
		let findMin = (node = this.root) => {
			if (node == null) return -1;
			let L = findMin(node.left);
			let R = findMin(node.right);
			return (L < R) ? L + 1 : R + 1;
		};
		return (findMax() > findMin() + 1) ? false : true;
	};
	this.isBalancedOnce = function() {
		let record = { min: null, max: null };
		let depthFirst = (node = this.root, height = -1) => {
			if (node == null) {
				if (record.min == null) record.min = height;
				if (record.max == null) record.max = height;
				if (height < record.min) record.min = height;
				if (height > record.max) record.max = height;
				return;
			};
			height++;
			depthFirst(node.left, height);
			depthFirst(node.right, height);
		};
		depthFirst();
		return (record.max > record.min + 1) ? false : true;
	};
	this.isBinaryTree = function(node = this.root) {
		if (node.left != null) {
			return (node.left.value > node.value) ? false : this.isBinaryTree(node.left);
		} else {
			return true;
		};
		if (node.right != null) {
			return (node.right.value < node.value) ? false : this.isBinaryTree(node.right);
		} else {
			return true;
		};
	};
};

let tree = new BinarySearchTree();

let R = [];
(function gen(n) {
	while (R.length < n) R.push((Math.random() * 100).toFixed());
	return R;
})(150);

R.forEach(v => tree.add(v));

console.clear();
console.log(tree);
console.log(tree.isBinaryTree());
console.log(tree.isSym());
console.log(tree.isBalanced());
console.log(tree.isBalancedOnce());

