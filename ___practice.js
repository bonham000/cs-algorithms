"use strict"

// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	console.log(result);
};

// generate a random array:
let R = [];
(function gen(n) {
	while (R.length < n) R.push(+(Math.random() * 100).toFixed());
	return R;
})(8);


function LinkedList() { 
  this.head = null; 
  var Node = function(element) {
    this.element = element; 
    this.next = null; 
  };
  this.print = function()  {
    let node = this.head;
    let result = new String();
    while (node.next != null) {
      result += (node.element + ', ');
      node = node.next;
    }
    result += (node.element + '.');
    console.log(result);
  };
  this.add = function(element) {
    let node = this.head;
    let newNode = new Node(element);
    if (node == null) {
      this.head = newNode;
    } else {
      while (node.next != null) {
        node = node.next;
      }
      node.next = newNode;
    }
    length++;
  };
};


function addTwoNumbers(L1, L2) {
	function intoNum(list) {
		let N = [];
		let node = list.head;
		while (node != null) {
			N.unshift(node.element);
			node = node.next;
		}
		return N;
	}
	let num1 = intoNum(list1);
	let num2 = intoNum(list2);
	let sum = Number(num1.join('')) + Number(num2.join(''));
	let list = new LinkedList();
	sum.toString().split('').reverse().forEach(n => list.add(n));
	return list;
};



let list1 = new LinkedList(); list1.add(2); list1.add(4); list1.add(3);
let list2 = new LinkedList(); list2.add(5); list2.add(6); list2.add(4);

// test code:
console.clear();

console.log(addTwoNumbers(list1, list2));








