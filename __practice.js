
// performance timer:
const timeFn = (fn, args) => {
	let timeStart = performance.now();
	let result = fn(args);
	let timeEnd = performance.now();
	console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
	console.log(result);
};

function isSorted(arr) {
	let check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
	return check(0);
};

// generate a random array:
var R = [];
(function gen(n = 5) {
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(15)

var sorted = (A) => A.sort((a, b) => a - b);

'use strict';

class Heap{

  constructor(type = 'min'){
    this.storage = [];
    this.type = type;
  }

  compare(a, b){
    if (this.type === 'min') {
      return (this.storage[a] < this.storage[b]) ? true : false;
    } else if (this.type === 'max') {
      return (this.storage[a] > this.storage[b]) ? true : false;
    }
  }

  swap(index1, index2){
    [this.storage[index1], this.storage[index2]] = [this.storage[index2], this.storage[index1]];
  }

  peak(){
    return this.storage[0];
  }

  size(){
    return this.storage.length;
  }

  insert(value){
    this.storage.push(value);
    this.size++;
    console.log(value)
    this.bubbleUp(this.storage.length - 1);
  }

  bubbleUp(index){
    var parent = Math.floor((index - 1) / 2);
    console.log(index, parent)
    if (index > 0 && this.compare(index, parent)) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }
  }

  removePeak(){
    this.swap(0, this.storage.length - 1);
    var peak = this.storage.pop();
    this.bubbleDown(0)
    return peak;
  }

  bubbleDown(index){
    if (index >= this.storage.length) return;
    var leftChild = (2 * index) + 1;
    var rightChild = (2 * index) + 2;

    if (leftChild < this.storage.length) {

	    if (!this.compare(index, leftChild) || !this.compare(index, rightChild)) {
	    	var swap;
	    	if (rightChild >= this.storage.length) {
	    		swap = leftChild
	    	} else {
	    		swap = (this.compare(leftChild, rightChild)) ? leftChild : rightChild;
	    	}
	    	this.swap(index, swap);
	    	this.bubbleDown(swap);
	    }
	  }

  }

  remove(value){
    var removed;
    if (this.storage.indexOf(value) !== -1) {
      var idx = this.storage.indexOf(value);
      this.swap(idx, this.storage.length - 1);
      removed = this.storage.pop();
      var parent = (idx - 1) / 2;
      if (!this.compare(parent, idx)) {
        this.bubbleUp(idx);
      } else {
        this.bubbleDown(idx);
      }
    }
    return removed;
  }
}

console.clear();

let heap = new Heap('max');
heap.insert(2);
heap.insert(5);
heap.insert(10);
heap.insert(1);
console.log(heap.storage)
console.log(heap.peak());
console.log(heap.storage)









