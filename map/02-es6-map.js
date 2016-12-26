document.write(`
<b>Title:</b> Create an ES6 JavaScript Map`)

document.write(`<br><br>
<b>Description:</b> The new version of JavaScript provides us with a built-in <code>Map</code> object which provides much of
the functionality we wrote by hand in the last challenge. This <code>Map</code> object, although similar to regular JavaScript
objects, provides some useful functionality that normal objects lack. For example, an ES6 <code>Map</code> tracks the insertion
order of items that are added to it. Here is a more complete overview of its methods:

<br><br>

<code>.has(key)</code> returns <code>true</code> or <code>false</code> based on the presence of a <code>key</code><br>
<code>.get(key)</code> returns the <code>value</code> associated with a <code>key</code><br>
<code>.set(key, value)</code> sets a new <code>key, value</code> pair<br>
<code>.delete(key)</code> removes a <code>key, value</code> pair<br>
<code>.clear()</code> removes all <code>key, value</code> pairs<br>
<code>.entries()</code> returns an array of all the keys in insertion order<br>
<code>.values()</code> returns an array of all the values in insertion order

`);

document.write(`<br><br>
<b>Instructions:</b> Define a JavaScript <code>Map</code> object and assign to it a variable called <code>myMap</code>.
Add the key value pair <code>'Free Code Camp', 'Awesome!'</code> to it.
`);

// SEED CODE
// change code below this line

// SOLUTION CODE
let myMap = new Map();
myMap.set('Free Code Camp', 'Awesome!');

// TESTS
assert(typeof myMap == 'object', 'The myMap object exists.');
assert(myMap.get('Free Code Camp') == 'Awesome!', 'myMap contains the key value pair \'Free Code Camp\', \'Awesome!\'.');