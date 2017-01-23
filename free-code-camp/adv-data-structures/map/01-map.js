document.write(`
<b>Title:</b> Create a Map Data Structure`)

document.write(`<br><br>
<b>Description:</b> The next few challenges will cover maps and hash tables. Maps are data structurs that store key-value pairs.
In JavaScript, these are available to us as objects. Maps provide rapid lookup of stored items based on key values and are very
common and useful data structures.
`);

document.write(`<br><br>
<b>Instructions:</b> Let's get some practice creating our own map. Because JavaScript objects provide a much more efficient
map structure than anything we could write here, this is intended primarily as a learning exercise. However, JavaScript
objects only provide us with certain operations. What if we wanted to define custom operations?<br><br>

Use the <code>Map</code> object provided here as a wrapper around a JavaScript <code>object</code>.
Create the following methods and operations on the <code>Map</code> object:<br><br>

<code>add</code> accepts a <code>key, value</code> pair to add to the map<br>
<code>remove</code> accepts a <code>key</code> and removes the associated <code>key, value</code> pair<br>
<code>get</code> accepts a <code>key</code> and returns the stored <code>value</code><br>
<code>has</code> returns a <code>boolean</code> for the presence or absence of an item<br>
<code>values</code> returns an array of all the values in the map<br>
<code>size</code> returns the number of items in the map<br>
<code>clear</code> empties the map

`);

// SEED CODE
let Map = function() {
	this.collection = {}
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let Map = function() {
	this.collection = {};
	this.count = 0;
	this.size = function() {
		return this.count;
	};
	this.add = function(key, value) {
		this.collection[key] = value;
		this.count++;
	};
	this.has = function(key) {
		return (key in this.collection);
	};
	this.get = function(key) {
		return (key in this.collection) ? this.collection[key] : null;
	};
	this.remove = function(key) {
		if (key in this.collection) {
			delete this.collection[key];
			this.count--;
		}
	};
	this.values = function() {
		let result = new Array();
		for (let key of Object.keys(this.collection)) {
			result.push(this.collection[key]);
		};
		return (result.length > 0) ? result : null;
	};
	this.clear = function() {
		this.collection = {};
		this.count = 0;
	};
};

// TESTS
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test == 'object')})(), 'The Map data structure exists.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; return (typeof test.add == 'function' && typeof test.remove == 'function' && typeof test.get == 'function' && typeof test.has == 'function' && typeof test.values == 'function' && typeof test.clear == 'function' && typeof test.size == 'function')})(), 'The Map object has the following methods: add, remove, get, has, values, clear, and size.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add(5,6); test.add(2,3); test.add(2,5); return (test.size() == 3)})(), 'The add method adds items to the map.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('test','value'); return (test.has('test') && !test.has('false'))})(), 'The has method returns true for added items and false for absent items.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('abc','def'); return (test.get('abc') == 'def')})(), 'The get method accepts keys as input and returns the associated values.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('a','b'); test.add('c','d'); test.add('e','f'); let vals = test.values(); return (vals.indexOf('b') != -1 && vals.indexOf('d') != -1 && vals.indexOf('f') != -1)})(), 'The values method returns all the values stored in the map as strings in an array.');
assert((function() { let test = false; if (typeof Map !== 'undefined') { test = new Map() }; test.add('b','b'); test.add('c','d'); test.remove('asdfas'); let init = test.size(); test.clear(); return (init == 2 && test.size() == 0)})(), 'The clear method empties the map and the size method returns the number of items present in the map.');
