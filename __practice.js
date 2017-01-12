
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
	while (R.length < n) R.push(+(Math.random() * 10).toFixed());
	return R;
})(12);

//let sorted = R.sort((a, b) => a - b);

class MinHeap {
	constructor() {
		this.storage = [];
	}

	swap(index1, index2) {
		[this.storage[index1], this.storage[index2]] = [this.storage[index2], this.storage[index1]];
	}
	size() {
		return this.storage.length;
	}
	peak() {
		return this.storage[0];
	}
	insert(value) {
		this.storage.push(value);
		this.bubbleUp(this.size() - 1)
	}
	bubbleUp(index) {
		var childIndex = index;
		var parentIndex = (childIndex % 2 == 0) ?
			(childIndex - 2) / 2 : (childIndex - 1) / 2;

		while(childIndex > 0 && this.storage[parentIndex] > this.storage[childIndex]) {

			this.swap(childIndex, parentIndex);
			childIndex = parentIndex;
			parentIndex = (childIndex % 2 == 0) ?
				(childIndex - 2) / 2 : (childIndex - 1) / 2;

		}

	}
	removePeak() {
		this.swap(0, this.size() - 1);
		var toReturn = this.storage.pop();
		this.bubbleDown(0);
		return toReturn
	}
	bubbleDown(index) {
		var parentIndex = index;
		var leftIndex = 2 * parentIndex + 1;
		var rightIndex = 2 * parentIndex + 2;
		var masterChildIndex;
		if (leftIndex > this.size()) {
			return;
		} else if (rightIndex >= this.size()) {
			masterChildIndex = leftIndex;
		} else if (this.storage[leftIndex] < this.storage[rightIndex]) {
			masterChildIndex = leftIndex;
		} else {
			masterChildIndex = rightIndex;
		}

		while(leftIndex < this.size() && this.storage[parentIndex] > this.storage[masterChildIndex]) {
			this.swap(parentIndex, masterChildIndex);
			
			parentIndex = index;
			leftIndex = 2 * parentIndex + 1;
			rightIndex = 2 * parentIndex + 2;
			
			if (leftIndex > this.size()) {
				return;
			} else if (rightIndex >= this.size()) {
				masterChildIndex = leftIndex;
			} else if (this.storage[leftIndex] < this.storage[rightIndex]) {
				masterChildIndex = leftIndex;
			} else {
				masterChildIndex = rightIndex;
			}

		}
	}
	remove(value) {

		var index;
		for (var i = 0; i < this.storage.length; i++) {
			if (this.storage[i] === value) {
				index = i;
				break;
			}
		}

		if (index == null) return;

		this.swap(index, this.size() - 1);
		var toReturn = this.storage.pop();

		this.bubbleDown(index);
		this.bubbleUp(index);

		return toReturn;

	}


}

console.clear();

let heap = new MinHeap();
for (let n of R) heap.insert(n);
console.log(heap.storage);
console.log(heap.removePeak());
console.log(heap.storage);
console.log(heap.removePeak());
console.log(heap.storage);
console.log(heap.remove(4));
console.log(heap.storage);



