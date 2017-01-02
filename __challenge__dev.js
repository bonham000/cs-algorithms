// This leads to a crucial point
// to understand about objects as data structures: <b>they provide access to stored elements in constant time.</b> Internally, the object has a way of knowing
// exactly where the <code>followers</code> property is so that when it is accessed it can be returned instantly without having to search through the contents
// of the object. In contrast, if these properties were stored in an <code>array</code> you would have to iterate through the array to find a specific value.

document.write(`
<b>Title:</b> TITLE
`)

document.write(`<br><br>
<b>Description:</b> Objects, and other similar key-value pair data structures, offer some very useful benefits. One clear benefit is that they allow us to
structure our data in a way that is very easy to understand. You can use objects to represent basically anything and provide specific property names which
describe the data they represent. This is also the foundation for JavaScript Object Notation, JSON, which is a widely used method of sending data
across the web. You can also have properties nested to an arbitrary depth. For instance, you can set the value of a key to be another object.

<br><br>

Another powerful advantage of key-value pair data structures is constant lookup time. What we mean by this is when you request the value of a specific
property you will get the value back in the same amount of time regardless of the number of entries in the object. If you had an object with 5 entries or one
that held a collection of 1,000,000 entries you could still retrieve property values in the same amount of time.

<br><br>

This is because internally the object is storing
properties using some type of <i>hashing mechanism</i> which allows it to know exactly where it has stored different property values. While we won't describe
this in depth here, this attribute is what makes objects such attractive and widely used data structures. All you should remember for now is that objects
provide very performant access to stored data and this makes them a great tool to work with.
`);

document.write(`<br><br>
<b>Instructions:</b> INSTRUCTIONS
`);

// SEED CODE





// SOLUTION CODE





// TAIL CODE




// TESTS
console.clear();