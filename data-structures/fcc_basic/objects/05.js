document.write(`
<b>Title:</b> Check if an Object has a Key
`)

document.write(`<br><br>
<b>Description:</b> Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property? JavaScript
provides two different ways to do this. One uses the <code>hasOwnProperty</code> method on the object and the other uses the <code>in</code> keyword.
If we have an object <code>users</code> with a property of <code>Alan</code>, we could check for its presence in either of the following ways:<br><br>

<code>user.hasOwnProperty('Alan');</code>

<br><br>

<code>'Alan' in user;</code>

<br><br>

<code>// both return true</code>
`);

document.write(`<br><br>
<b>Instructions:</b> We've created a <code>users</code> object here with some users in it and a function <code>isEveryoneHere</code> which we pass the
<code>users</code> object to as an argument. Finish writing this function so that it returns <code>true</code> only if the <code>users</code> object
contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and <code>false</code> otherwise.
`);

// SEED CODE
let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function isEveryoneHere(obj) {
	// change code below this line

	// change code above this line
};

isEveryoneHere(users);

// SOLUTION CODE
let users = {
	Alan: {
		age: 27,
		online: true
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: true
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function isEveryoneHere(obj) { 
	return ('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users) ? true : false;
};

isEveryoneHere(users);

// TESTS
console.clear();

console.assert('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users && Object.keys(users).length === 4, 'The users object only contains the keys Alan, Jeff, Sarah, and Ryan.');
console.assert(isEveryoneHere(users) === true, 'The function isEveryoneHere returns true if Alan, Jeff, Sarah, and Ryan are properties on the users object');
console.assert((function() { delete users.Alan; delete users.Jeff; delete users.Sarah; delete users.Ryan; return isEveryoneHere(users) })() === false, 'The function isEveryoneHere returns false if Alan, Jeff, Sarah, and Ryan are not keys on the users object.');



