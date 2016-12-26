
// helper node
let Node = function(value) {
	this.data = value;
	this.next = null;
};

// 1a) with ES6 class syntax
class LinkedList {
	constructor() {
		this.start = null;
		this.getStart = function() {
			return this.star;t;
		}
		this.add = function(value) {
			this.start = new Node(value);
		};		
	};
};

// 1b) with class & prototype
class LinkedList {
	constructor() {
		this.start = null;
	};
};

LinkedList.prototype = {
	getStart: function() {
		return this.start;
	},
	add: function(value) {
		this.start = new Node(value);
	}
};

// 2) just make an object
let LinkedList = {
	start: null,
	getStart: function() {
		return this.start;
	},
	add: function(value) {
		this.start = new Node(value);
	}
};

// 3) with a function and this
let LinkedList = function() {
	this.start = null;
	this.getStart = function() {
		return this.start;
	}
	this.add = function(value) {
		this.start = new Node(value);
	};
};

// 4) using closure to reference data
let LinkedList = function() {
	let start = null;
	this.getStart = function() {
		return start;
	};
	this.add = function(value) {
		start = new Node(value);
	};
};

// 5) using prototype and shorthand for method declarations
let LinkedList = function() {
	this.start = null;
};

LinkedList.prototype = {
	getStart() {
		return this.start;
	},
	add(value) {
		this.start = new Node(value);
	}
};
