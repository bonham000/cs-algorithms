document.write(`
<b>Title:</b> Add Key-Value Pairs to JavaScript Objects
`)

document.write(`<br><br>
<b>Description:</b> The next data structure we will disucss is the JavaScript <code>object</code>. Objects are a very fundamental part of JavaScript,
in fact, you may have heard this line before: 'In JavaScript, everything is an object.' While an understanding of objects is important to understand the
inner workings of JavaScript functions or JavaScript's object oriented capabilities, here we will confine our discussion to the use of
JavaScript objects as <code>key-value</code> pair data structures.<br><br>

This type of data structure goes by different names depending on the language you are using and the specific details. The terms <i>dictionary</i>,
<i>map</i>, and <i>hash table</i> all refer to the notion of a data structure in which specific keys, or properties are mapped to specific values.
For instance, consider the following:<br>

<pre>
<code>let FCC_User = {
 username: 'awesome_coder',
 followers: 572,
 points: 1741,
 completedProjects: 15
};</code>
</pre>

We've just defined an object called <code>FCC_User</code> with four <i>properties</i> each of which map to a specific value. If you wanted to know the
number of followers <code>FCC_User</code> has, you could access that property by writing <code>FCC_User.followers</code>. This is called dot notation,
you could also access the property with brackets, like so: <code>FCC_User['followers']</code>. Notice with the bracket notation we enclosed 
<code>followers</code> in quotes. This is because the brackets actually allow us to pass a variable in to be evaluated as a property name. So if we already
know the property name, we have to enclose it in quotes.
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
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// TESTS
console.clear();

console.assert(typeof foods === 'object', 'foods is an object');
console.assert(foods.bananas === 13, 'The foods object has a key \'bananas\' with a value of 13.');
console.assert(foods.grapes === 35, 'The foods object has a key \'grapes\' with a value of 35.');
console.assert(foods.strawberries === 27, 'The foods object has a key \'strawberries\' with a value of 27.');

