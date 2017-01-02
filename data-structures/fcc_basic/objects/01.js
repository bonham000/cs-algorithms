document.write(`
<b>Title:</b> Add Key-Value Pairs to JavaScript Objects
`)

document.write(`<br><br>
<b>Description:</b> The next data structure we will discuss is the JavaScript <code>object</code>. Objects are a very fundamental part of JavaScript,
in fact, you may have heard this line before: 'In JavaScript, everything is an object.' While an understanding of objects is important to understand the
inner workings of JavaScript functions or JavaScript's object-oriented capabilities, here we will confine our discussion to the use of
JavaScript objects as <code>key-value</code> pair data structures.<br><br>

Key-value pair data structure go by different names depending on the language you are using and the specific details of the data structure. The terms <i>dictionary</i>,
<i>map</i>, and <i>hash table</i> all refer to the notion of a data structure in which specific <i>keys</i>, or <i>properties</i> are mapped to specific <i>values</i>.
For instance, consider the following:<br>

<pre>
<code>let FCC_User = {
 username: 'awesome_coder',
 followers: 572,
 points: 1741,
 completedProjects: 15
};</code>
</pre>

We've just defined an object called <code>FCC_User</code> with four <i>properties</i> each of which map to a specific <i>value</i>. If you wanted to know the
number of followers <code>FCC_User</code> has, you could access that property by writing <code>FCC_User.followers</code> — this is called dot notation.
You could also access the property with brackets, like so: <code>FCC_User['followers']</code>. Notice with the bracket notation we enclosed 
<code>followers</code> in quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name. Keep this in mind for later.
`);

document.write(`<br><br>
<b>Instructions:</b> We've created a <code>foods</code> object here with three entries. Add three more entries: <code>bananas</code> with a value of
<code>13</code>, <code>grapes</code> with a value of <code>35</code>, and <code>strawberries</code> with a value of <code>27</code>.
`);

// SEED CODE
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28
};
// change code below this line

// SOLUTION CODE
let foods = {
	apples: 25,
	oranges: 32,
	plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// TESTS
console.clear();

console.assert(typeof foods === 'object', 'foods is an object');
console.assert(foods.bananas === 13, 'The foods object has a key \'bananas\' with a value of 13.');
console.assert(foods.grapes === 35, 'The foods object has a key \'grapes\' with a value of 35.');
console.assert(foods.strawberries === 27, 'The foods object has a key \'strawberries\' with a value of 27.');

