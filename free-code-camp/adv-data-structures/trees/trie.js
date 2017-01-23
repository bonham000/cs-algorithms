document.write(`
<b>Title:</b> Create a Trie Search Tree`);

document.write(`<br><br>
<b>Description:</b> Here we will move on from binary search trees and take a look at another type of tree structure called a <b>trie</b>. A trie is an
ordered search tree commonly used to hold strings, or more generically associative arrays or dynamic datasets in which the keys
are strings. They are very good at storing sets of data when many keys will have overlapping prefixes, for example, all
the words in a dictionary.<br><br>

Unlike a binary tree, nodes are not associated with actual values. Instead, the <i>path</i> to a node represents a specific key.
For instance, if we wanted to store the string <code>code</code> in a trie, we would have four nodes, one for each letter:
<code>c — o — d — e</code>.
Following that path through all these nodes will then create <code>code</code> as a string — that path is the key
we stored. Then,
if we wanted to add the string <code>coding</code>, it would share the first three nodes of <code>code</code> before branching
away after the <code>d</code>. In this way,
large datasets can be stored very compactly. In addition, search can be very quick because it is effectively limited to the
length of the string you are storing. Furthermore, unlike binary trees a node can store any number of child nodes.<br><br>

As you might have guessed from the above example, some metadata is commonly stored at nodes that hold the end of a key
so that on later traversals that key can still be retrieved. For instance, if we added <code>codes</code> in our example above
we would need some way to know that the <code>e</code> in <code>code</code> represents the end of a key that was
previously entered. Otherwise, this information would effectively be lost when we add <code>codes</code>.
`);

document.write(`<br><br>
<b>Instructions:</b> Let's create a trie to store words. It will accept words through an <code>add</code> method and store these
in a trie data structure. It will also allow us to query if a given string is a word with an <code>isWord</code> method, and
retrieve all the words entered into the trie with a <code>print</code> method. <code>isWord</code> should return a
<code>boolean</code> value and <code>print</code> should return an array of all these words as string values.<br><br>

In order for us to verify that this data structure is implemented correctly, we've provided a <code>Node</code> structure
for each node in the tree. Each node will be an object with a <code>keys</code> property which is a JavaScript
<code>Map</code> object. This will hold the individual letters that are valid keys of each node. We've also
created an <code>end</code> property on the nodes that can be set to <code>true</code> if the node represents the termination
of a word.
`);

// HELPER CODE --------------------------------
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// SEED CODE --------------------------------
let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};
let Trie = function() {
	// change code below this line

	// change code above this line
};

// SOLUTION CODE --------------------------------
let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {
			node.keys.set(input[0], new Node(input[0]));
			return this.add(input.substr(1), node.keys.get(input[0]));
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};

	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? true : false;
	};

	this.print = function() {
		let words = new Array();
		let search = function(node = this.root, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : null;
	};

};

// TESTS:
assert((function testTrie() { let test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.add == 'function') }()), 'The Trie has an add method.');
assert((function testTrie() { let test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.print == 'function') }()), 'The Trie has a print method.');
assert((function testTrie() { let test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.isWord == 'function') }()), 'The Trie has an isWord method.');
assert((function testTrie() { let test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; test.add('jump'); test.add('jumps'); test.add('jumped'); test.add('house'); test.add('mouse'); let added = test.print(); return (added.indexOf('jump') != -1 && added.indexOf('jumps') != -1 && added.indexOf('jumped') != -1 && added.indexOf('house') != -1 && added.indexOf('mouse') != -1 && added.length == 5); }()), 'The print method returns all items added to the trie as strings in an array.');
assert((function testTrie() { let test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; test.add('hop'); test.add('hops'); test.add('hopped'); test.add('hoppy'); test.add('hope'); return (test.isWord('hop') && !test.isWord('ho') && test.isWord('hopped') && !test.isWord('hopp') && test.isWord('hoppy') && !test.isWord('hoping')); }()), 'The isWord method returns true only for words added to the trie and false for all other words.');

