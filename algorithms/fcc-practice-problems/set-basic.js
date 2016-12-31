
function Set() {
  // The var collection will hold our set
  var collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1);
  };

  // this method will return all the values in the set
  this.values = function() {
    return collection;
  };

  // this method will add an element to the set
	this.add = function(val) {
		if (!this.has(val)) {
			collection.push(val);
		}
	};

  // this method will remove an element from a set
	this.remove = function(val) {
		if (this.has(val)) {
			let index = collection.indexOf(val);
			collection = [...collection.slice(0, index), ...collection.slice(index + 1)];
		}
	};

	// this method will return the size of the collection
	this.size = function() {
		return collection.length;
	};

	// this method will return the union of two sets
	this.union = function(toMerge) {
		for (let item of collection) {
			if (toMerge.has(item)) {
				toMerge.remove(item);
			}
		}
		collection = collection.concat(toMerge.values());
	};

	// this method will return the intersection of two sets as a new set
	this.intersection = function(toTest) {
		let intersection = new Set();
		this.values().forEach(item => {
			if (toTest.has(item)) {
				intersection.add(item);
			}
		});
		return intersection;
	};

	// this method will return the difference of two sets as a new set
	this.difference = function(diff) {
		let difference = new Set();
		collection.forEach(item => {
			if (!diff.has(item)) {
				difference.add(item);
			}
		});
		return difference;
	};

	// this method will compare two sets and return true if the first is a subset of the second
	this.subset = function(compare) {
		for (let item of collection) {
			if (!compare.has(item)) {
				return false;
			}
		};
		return true;
	};

	// change code below this line

  // change code above this line

 };

  var setA = new Set();
  var setB = new Set();

  setA.add("a");
  setA.add("l");
  setB.add("b");
  setB.add("c");
  setB.add("a");
  setB.add("l");
  setA.add("m");
  setB.add("d");
  setB.add("m");
  
  var subSetSetAB = setA.subset(setB);
  console.log(subSetSetAB) // should be true;



