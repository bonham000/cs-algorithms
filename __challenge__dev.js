document.write(`
<b>Title:</b> Generate an Array of All Object Keys with Object.keys()
`)

document.write(`<br><br>We can also generate an array which contains all the keys stored in an object using the <code>Object.keys()</code> method and
passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific
order to the entries in the array.
`);

document.write(`<br><br>
<b>Instructions:</b> Finish writing the <code>getArrayOfUsers</code> function so that it returns an array containing all the properties in the object
it receives as an argument.
`);

// SEED CODE
let users = {
	Alan: {
		age: 27,
		online: false
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: false
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function getArrayOfUsers(obj) {
	// change code below this line

	// change code above this line
};

// SOLUTION CODE
let users = {
	Alan: {
		age: 27,
		online: false
	},
	Jeff: {
		age: 32,
		online: true
	},
	Sarah: {
		age: 48,
		online: false
	},
	Ryan: {
		age: 19,
		online: true
	}
};

function getArrayOfUsers(obj) {
	return Object.keys(obj);
};

// TESTS
console.clear();

console.assert('Alan' in users && 'Jeff' in users && 'Sarah' in users && 'Ryan' in users && Object.keys(users).length === 4, 'The users object only contains the keys Alan, Jeff, Sarah, and Ryan.');
console.assert((function() { users.Sam = {}; users.Lewis = {}; let R = getArrayOfUsers(users); return (R.indexOf('Alan') !== -1 && R.indexOf('Jeff') !== -1 && R.indexOf('Sarah') !== -1 && R.indexOf('Ryan') !== -1 && R.indexOf('Sam') !== -1 && R.indexOf('Lewis') !== -1); })() === true, 'The getArrayOfUsers function returns an array which contains all the keys in the users array.');


