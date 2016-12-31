
function PriorityQueue () {
    collection = [];
    this.printCollection = function(){
      (console.log(collection));
    };
    this.enqueue = function(newItem) {
    	if (collection.length == 0) {
				collection.push(newItem)
			} else {
				let inserted = false;
	    	collection = collection.reduce((newCollection, item) => {
					if (newItem[1] < item[1] && !inserted) {
						newCollection.push(newItem);
						inserted = true;
					}
					newCollection.push(item);
					if (newItem[1] == item[1] && !inserted) {
						newCollection.push(newItem);
						inserted = true;
					}
					return newCollection;
	    	}, []);
	    	if (!inserted) {
    			collection.push(newItem);
    		}
	    };
    	return collection;
    };
    this.dequeue = function() {
    	if (collection.length > 0) {
    		return collection.shift();
    	} else {
    		return 'The queue is empty.'
    	}
    };
    this.front = function() {
    	return collection[0];
    };
    this.size = function() {
    	return collection.length;
    };
    this.isEmpty = function() {
    	return collection.length > 0 ? false : true;
    };
  }

// Test your queue class
var DMV = new PriorityQueue();
console.log(DMV.enqueue(['David Brown', 2]));
console.log(DMV.enqueue(['Jon Snow', 1]));
console.log(DMV.enqueue(['Jon Snower', 3]));
console.log(DMV.enqueue(['Jon Snowy', 1]));
console.log(DMV.dequeue());
console.log(DMV.front());
console.log(DMV.isEmpty());
console.log(DMV.size());
console.log(DMV.dequeue());
console.log(DMV.dequeue());
console.log(DMV.dequeue());
console.log(DMV.dequeue());
console.log(DMV.isEmpty());


