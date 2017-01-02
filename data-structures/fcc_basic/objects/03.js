document.write(`
<b>Title:</b> Access Property Names with Bracket Notation
`)

document.write(`<br><br>
<b>Description:</b> In the first challenge we mentioned the use of bracket notation as a way access properties values using the evaluation of a variable.
For instance, if you recall our <code>foods</code> object from that challenge, imagine that this object is being used in a program for a supermarket cash register.
We have some function that sets the <code>selectedFood</code> and we want to check our <code>foods</code> object for the presence of that food. This might look like:<br>

<pre>
<code>let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];</code>
</pre>

This code will evaluate the value stored in the <code>selectedFood</code> variable and return the value of that key in the <code>foods</code> object, or
<code>undefined</code> if it is not present. Braket notation is very useful because sometime object properties are not known before runtime or we need to access
them in a more dynamic way.
`);

document.write(`<br><br>
<b>Instructions:</b> In the example code we've defined a function <code>checkInventory</code> which receives a scanned item as an argument. Return the current value
of the <code>scannedItem</code> key in the <code>foods</code> object. Assume that only valid keys will be provided as an argument to <code>checkInventory</code>.
`);

// SEED CODE
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
};

function checkInventory(scannedItem) {
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
};

function checkInventory(scannedItem) {
	return foods[scannedItem];
};

// TESTS
console.clear();

console.assert(typeof checkInventory === 'function', 'checkInventory is a function');
console.assert(checkInventory('apples') === 25 && checkInventory('bananas') === 13 && checkInventory('strawberries') === 27, 'The checkInventory function returns the value of the scannedItem argument in the foods object.');


