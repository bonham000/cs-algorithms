document.write(`
<b>Title:</b> Iterate Through the Keys of an Object with a for...in Statement
`)

document.write(`<br><br>
<b>Description:</b> Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement.
For our <code>users</code> object from the last challenge, this could look like:<br>

<pre>
<code>for (let user in users) {
 console.log(user);
};</code>
</pre>

In this statement, we define a variable <code>user</code>. This variable will be set to the key in each iteration as the statement loops through the keys in the object.
Running this code would print the name of each user to the console. Note that objects do not maintain an ordering to stored keys like arrays do.
`);

document.write(`<br><br>
<b>Instructions:</b> We've defined a function <code>countOnline</code> that should return the number of users with the online property set to <code>true</code>. Use
a <code>for...in</code> statement within this function to loop through the users in the users object and return the number of users whose online property is set to <code>true</code>.
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

function countOnline(obj) {
	// change code below this line

	// change code above this line
};

countOnline(users);

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

function countOnline(obj) { 
	let n = 0;
	for (let user in obj) if (obj[user].online) n++;
	return n;
};

countOnline(users);

// TESTS
console.clear();

console.assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, 'The users object contains users Jeff and Ryan with online set to true and users Alan and Sarah with online set to false.');
console.assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, 'The function countOnline returns the number of users with the online property set to true.');



