document.write(`
<b>Title:</b> Use the Delete Keyword to Remove Object Properties
`)

document.write(`<br><br>
<b>Description:</b> Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive
way to structure data and they provide very fast lookup time. For the rest of these challenges, we will describe several common operations you can perform on objects
so you can become comfortable applying these useful data structures in your programs.<br><br>

Previously, we added and modified key-value pairs to objects. Here we will see how we can remove a key-value pair from an object. If we wanted to remove the 
<code>apples</code> key from our <code>foods</code> object from before, we could remove it by using the <code>delete</code> keyword like this:<br><br>

<code>delete foods.apples;</code>
`);

document.write(`<br><br>
<b>Instructions:</b> Use the <code>delete</code> keyword to remove the <code>oranges</code>, <code>plums</code>, and <code>strawberries</code> keys
from the <code>foods</code> object.
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
// change code below this line

// SOLUTION CODE
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.bananas;

// TESTS
console.clear();

console.assert(!foods.hasOwnProperty('oranges') && !foods.hasOwnProperty('plums') && !foods.hasOwnProperty('bananas') && Object.keys(foods).length === 3, 'The foods object only has three keys: apples, grapes, and strawberries.');