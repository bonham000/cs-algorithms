document.write(`
<b>Title:</b> Modify an Array Stored in an Object
`)

document.write(`<br><br>
<b>Description:</b> Now you've seen all the basic operations for JavaScript objects. You can add, modify, and remove key-value pairs, check if keys exist, and
iterate over all the keys in an object. As you continue learning JavaScript you will see even more versatile applications of objects. Additionally, the
optional Advanced Data Structures lessons later in the curriculum also cover the ES6 <code>Map</code> and <code>Set</code> objects, both of which are similar
to ordinary objects but provide some additional features. Now that you've learned the basic of arrays and objects, you're ready to put this knowledge to use
solving some algorithms!
`);

document.write(`<br><br>
<b>Instructions:</b> Take a look at the object we've provided in the code editor. The <code>user</code> object contins three keys. The <code>data</code> key
contains four keys, one of which contains an array of friends. From this you can see how flexible objects are as data structures. We've started writing a
function <code>addFriend</code>. Finish writing it so that it takes a <code>user</code> object and adds the name of the <code>friend</code> argument to
the array stored in <code>user.data.friends</code>.
`);

// SEED CODE
let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'Free Code Camp',
		friends: [
			'Sam',
			'Kira',
			'Tomo'
		],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA'
		}
	}
};

function addFriend(user, friend) {
	// change code below this line	

	// change code above this line
};

// SOLUTION CODE
let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'Free Code Camp',
		friends: [
			'Sam',
			'Kira',
			'Tomo'
		],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA'
		}
	}
};

function addFriend(user, friend) {
	user.data.friends.push(friend);
	return user;
};

// TESTS
console.clear();

console.assert('name' in user && 'age' in user && 'data' in user, 'The user object has name, age, and data keys');
console.assert((function() { let L1 = user.data.friends.length; addFriend(user, 'Sean'); let L2 = user.data.friends.length; return (L2 === L1 + 1); })(), 'The addFriend function accepts a user object and a friend as arguments and adds the friend to the array of friends in the user object.');




