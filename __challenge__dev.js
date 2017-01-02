document.write(`
<b>Title:</b> Modify an Object Nested within an Object
`)

document.write(`<br><br>
<b>Description:</b> Objects, and other similar key-value pair data structures, offer some very useful benefits. One clear benefit is that they allow us to
structure our data in an intuitive way. They are also very flexible. For instance, you can have properties nested to an arbitrary depth, a key can store an
array, or another object. Objects are also the foundation for JavaScript Object Notation, JSON, which is a widely used method of sending data
across the web. <br><br>

Another powerful advantage of key-value pair data structures is constant lookup time. What we mean by this is when you request the value of a specific
property you will get the value back in the same amount of time regardless of the number of entries in the object. If you had an object with 5 entries or one
that held a collection of 1,000,000 entries you could still retrieve property values or check if a key exists in the same amount of time.<br><br>

The reason for this fast lookup time is that internally the object is storing
properties using some type of <i>hashing mechanism</i> which allows it to know exactly where it has stored different property values. If you want to learn more
about this please take a look at the optional Advanced Data Structures challenges. All you should remember for now is that objects
provide very performant access to stored data and this makes them a great tool to work with.
`);

document.write(`<br><br>
<b>Instructions:</b> Here we've written an object <code>nestedObject</code> which includes another object nested within it. You can modify properties on this nested
object in the same way you modified properties in the last challenge. Set the value of the <code>online</code> key to <code>45</code>.
`);

// SEED CODE
let nestedObject = {
	id: 23894201352,
	date: 'January 1, 2017',
	data: {
		totalUsers: 51,
		online: 42
	}
};

// SOLUTION CODE
nestedObject.data.online = 45;




// TAIL CODE




// TESTS
console.clear();
console.log(nestedObject)
console.assert('id' in nestedObject && 'date' in nestedObject && 'data' in nestedObject, 'nestedObject has id, date and data properities.');
console.assert('totalUsers' in nestedObject.data && 'online' in nestedObject.data, 'nestedObject has a data key set to an object with keys totalUsers and online.');
console.assert(nestedObject.data.online === 45, 'The online property nested in the data key of nestedObject should be set to 45.');