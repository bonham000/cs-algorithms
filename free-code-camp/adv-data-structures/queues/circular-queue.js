
class CircularQueue {
    constructor(size) {

	    this.queue = [];
	    this.read = 0;
	    this.write = 0;
	    this.max = size - 1;

	    while (size > 0) {
	    	this.queue.push(null);
	    	size--;
	    }

	  }

    print() {
    	return this.queue;
    }

    info() {
    	console.log('read: ', this.read);
    	console.log('write: ', this.write);
    }

    enqueue(item) {

    	if (this.queue[this.write] == null) {

	    	this.queue[this.write] = item;

	    	if (this.write === this.max) {
	    		this.write = 0;
	    	} else {
	    		this.write++;
	    	}

	    	return item;

    	}

    	return null;

    }

    dequeue() {

    	if (this.queue[this.read] !== null) {
				var item = this.queue[this.read];
		    this.queue[this.read] = null;
		    if (this.read === this.max) {
		    	this.read = 0;
		    } else {
		    	this.read++;
		    }
		    return item;
    	} else {
    		return null;
    	}

    }

}

console.assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), 'message: The enqueue method adds items to the circular queue.');
console.assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), 'message: You cannot enqueue items past the read pointer.');
console.assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), 'message: The dequeue method dequeues items from the queue.');
console.assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), 'message: After an item is dequeued it\'s position in the queue should be reset to <code>null</code>.');
console.assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), 'message: Trying to dequeue past the write pointer returns null and does not advance the write pointer.');



