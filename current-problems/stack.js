
function Stack() { 
    collection = [];
    this.print = function() {
      console.log(collection);
    }
    this.push = function(item) {
    	collection.push(item);
    	return collection;
    }
    this.peek = function() {
    	return collection[collection.length - 1];
    }
    this.isEmpty = function() {
    	if (collection.length > 0) {
    		return false;
    	} else {
    		return true;
    	}
    }
    this.clear = function() {
    	collection = [];
    }
};

// Test your stack class
var homework = new Stack();
// console.log(homework.push('CS50'));
// console.log(homework.push('CS75'));
console.log(homework.peek())
console.log(homework.isEmpty())
homework.clear();
console.log(homework.isEmpty())