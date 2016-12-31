function CircularQueue (size) {
    let collection = [];
    let read = 0;
    let write = 0;
    let maximum = size - 1;
    this.printCollection = function(){
      return collection;
    };
    this.info = function() {
    	return { read: read, write: write }
    }
    this.enqueue = function(data) {
    	if (Array.isArray(data)) {
    		for (let item of data) {
    			collection[write] = item;
    			if (write == maximum) {
    				write = 0;
    			} else {
    				write++;
    			}
    		}
    	} else {
    		collection[write] = data;
    		if (write == maximum) {
    			write = 0;
  			} else {
  				write++;
  			}
    	}
    }
    this.dequeue = function() {
    	let val = null;
    	if (read != write) {
       	val = collection[read];
    		collection[read] = null;
	    	if (read == maximum) {
	    		read = 0;
	    	} else {
	    		read++;
	    	}
	    }
	    return val == null ? 'Queue is empty' : val;
    }
    this.front = function() {
    	return collection[read];
    }
  }

// Test your queue class
var CircQue = new CircularQueue(10);

CircQue.enqueue([1, 2, 3, 4, 5, 6]);
console.log(CircQue.printCollection()); // collection should look like [6,2,3,4,5]
CircQue.dequeue();
CircQue.dequeue();
CircQue.dequeue();
CircQue.dequeue();
CircQue.dequeue();
console.log(CircQue.printCollection());
console.log(CircQue.info());
CircQue.enqueue(5);
CircQue.dequeue(); // should not advance past WriteHead
CircQue.dequeue();
CircQue.dequeue();
console.log(CircQue.info());
CircQue.dequeue();
console.log(CircQue.info());
console.log(CircQue.printCollection());
CircQue.enqueue(5);
CircQue.enqueue(8);
CircQue.enqueue(13);
CircQue.enqueue(2);
CircQue.enqueue(3);
CircQue.enqueue(12);
console.log(CircQue.info());
console.log(CircQue.printCollection());


