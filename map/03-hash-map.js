document.write(`
<b>Title:</b> Create a Hash Table`)

document.write(`<br><br>
<b>Description:</b> In this challenge we will learn about hash tables. A Hash table is used to implement associative arrays, or
mappings of key-value pairs, like the objects and Maps we have just been studying. A JavaScript object <i>could</i> be implemented
as a hash table, for instance (its actual implementation will depend on the environment it's running in).
The way a hash table works is that it takes a <code>key</code> input and <i>hashes</i> this key in
a deterministic way to some numerical value. This numerical value is then used as the actual <code>key</code> the associated
value is stored by. Then, if you try to access the same <code>key</code> again, the hashing function will process the key, return
the same numerical result, which will then be used to look up the associated value. This provides very efficient O(<i>n</i>)
lookup time on average.

<br><br>

Hash tables can be implemented as arrays with hash functions producing array indices within a specified range. In this method,
the choice of the array size is important, as is the hashing function. For instance, what if the hashing function produces the
same value for two different keys? This is called a <i>collision</i>. One way to handle collisions is to just store both key value pairs
at that index. Then, upon lookup of either, you would have to iterate through the <i>bucket</i> of items to find the key you are looking for.
A good hashing function will minimize collisions to maintain efficient search time.

<br><br>

Here, we won't be concerned with the details of hashing or hash table implementation, we will just try to get a general sense of how they work.
`);

document.write(`<br><br>
<b>Instructions:</b> Let's create the basic functionality of a hash table. We've created a naive hashing function
for you to use. You can pass a string value to the function <code>hash</code> and it will return a hashed value you can
use as a key for storage. Store items based on this hashed value in the <code>this.collection</code> object. Create these
three methods: <code>add</code>, <code>remove</code>, and <code>lookup</code>. The first should accept a key value pair
to add to the hash table. The second should remove a key value pair when passed a key. The third should accept a key and
return the associated value or <code>null</code> if the key is not present.

<br><br>

Be sure to write your code to account for collisions!
`);

// HEAD CODE
let called = 0;
let hash = (string) => {
	called++;
	let hash = 0;
	for (let i = 0; i < string.length; i++) { hash += string.charCodeAt(i); };
	return hash;
};

// SEED CODE
let HashTable = function() {
	this.collection = {};
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let HashTable = function() {

	this.collection = {};
	
	this.add = function(key, value) {
		let hashed = hash(key);
		if (this.collection.hasOwnProperty(hashed)) {
			let bucket = this.collection[hashed].filter(item => !item.hasOwnProperty(key));
			bucket.push({ [key]: value });
			this.collection[hashed] = bucket;
		} else {
			this.collection[hashed] = [{ [key]: value }];
		}
	};
	
	this.remove = function(key) {
		let hashed = hash(key);
		if (this.collection.hasOwnProperty(hashed)) {
			if (this.collection[hashed].length == 1) {
				delete this.collection[hashed];
			} else {
				this.collection[hashed] = this.collection[hashed].filter(item => !item.hasOwnProperty(key) );
			};
		} else {
			return null;
		}
	};
	
	this.lookup = function(key) {
		let hashed = hash(key);
		if (this.collection.hasOwnProperty(hashed)) {
			let bucket = this.collection[hashed];
			function find(index) {
				if (bucket[index].hasOwnProperty(key)) {
					return bucket[index][key];
				} else if (index != 0) {
					return find(index - 1)
				} else {
					return null;
				};
			};
			return find(bucket.length - 1);
		} else {
			return null;
		};
	};

};

// TESTS
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return (typeof test == 'object')})(), 'The HashTable data structure exists.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.add) == 'function')})(), 'The HashTable has an add method.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.remove) == 'function')})(), 'The HashTable has an remove method.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; return ((typeof test.lookup) == 'function')})(), 'The HashTable has an lookup method.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); return (test.lookup('key') == 'value')})(), 'The add method adds key value pairs and the lookup method returns the values associated with a given key.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; test.add('key', 'value'); test.remove('key'); return (test.lookup('key') == null)})(), 'The remove method accepts a key as input and removes the associated key value pair.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('key2','value2'); test.add('key3','value3'); return (called == 3)})(), 'Items are added using the hash function.');
console.assert((function() { let test = false; if (typeof HashTable !== 'undefined') { test = new HashTable() }; called = 0; test.add('key1','value1'); test.add('1key','value2'); test.add('ke1y','value3'); return (test.lookup('key1') == 'value1' && test.lookup('1key') == 'value2' && test.lookup('ke1y') == 'value3')})(), 'The hash table handles collisions.');
