
function Queue () { 
  collection = [];
  this.print = function() {
    console.log(collection);
  }
  this.enqueue = function(item) {
  	collection.push(item);
  	return collection;
  }
  this.dequeue = function() {
  	if (collection.length > 0) {
  		return collection.shift();	
  	}
  	return 'There are no items to dequeue';
  }
  this.front = function() {
  	return collection[0];
  }
  this.size = function() {
  	return collection.length;
  }
  this.isEmpty = function() {
  	return collection.length > 0 ? false : true;
  }
}

// Test your queue class
var DMV = new Queue();
console.log(DMV.enqueue('David Brown'));
console.log(DMV.enqueue('Jon Snow'));
console.log(DMV.size());
console.log(DMV.dequeue());
console.log(DMV.size());
console.log(DMV.front());
console.log(DMV.isEmpty());
console.log(DMV.dequeue());
console.log(DMV.isEmpty());
console.log(DMV.dequeue());