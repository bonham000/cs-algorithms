
this.a = 'a';

function fn() {
	this.b = 'b';
}

var obj = {
	func: fn
}

console.log(a);

obj.func()

console.log(obj);

var thing = new fn();

console.log(thing)

// call, apply, bind

var not = NaN

console.log(+('5'))
console.log(typeof null)
console.log(0 == false, false === 0)

// global/window object
// calling methods on objects
// constructor with new keyword
// explicit binding with call, apply, bind

class List {
	constructor() {
		this.head = 5;
		this.tail = null;
		this.state = {
			n: 5
		}
	}
	add() {
		var { n } = this.state;
		n++;
		this.state = { n }
	}
	get() {
		console.log(this.state);
	}
}

function LinkedList() {
	head = null
	this.add = function(elem) {
		head = elem;
		// ...

	}
	this.getHead = function() {
		return head;
	}
}

var myList = new LinkedList();
myList.add(5);
console.log(myList.head);
console.log(myList.getHead());


