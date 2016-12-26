
document.write(`
<b>Title:</b> Find the Minimum and Maximum Value in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> This series of challenges will introduce the tree data structure. Trees are an important and versatile data structure in computer
science. Of course, their name comes from the fact that when visualized they look much like the trees we are familiar with in the natural world. A tree data structure
begins with one node, typically referred to as the root, and from here branches out to additional nodes, each of which may have more child nodes, and
so on and so forth. The data structure is usually visualized with the root node at the top; you can think of it as a natural tree flipped upside down.<br><br>

First, let's describe some common terminology we will encounter with trees. The <b>root node</b> is the top of the tree. Data points in the tree are called <b>nodes</b>.
Nodes with branches leading to other nodes are referred to as the <b>parent</b> of the node the branch leads to (the <b>child</b>). Other more complicated familial terms
apply as you might expect. A <b>subtree</b> refers to all the descendants of a particular node, branches may be referred to as <b>edges</b>, and <b>leaf</b> nodes
are nodes at the end of the tree that have no children. Finally, note that trees are inherently recursive data structures. That is, any children of a node
are parents of their own subtree, and so on. The recursive nature of trees is important to understand when designing algorithms for common tree operations.<br><br>

To begin, we will discuss a particular type of a tree, the binary tree. In fact, we will actually discuss a <i>particular</i> binary tree, a binary search tree.
Let's describe what this means. While the tree data structure can have any number of branches at a single node, a binary tree can only have two branches for
every node. Furthermore, a binary search tree is ordered with respective to the child subtrees, such that each left subtree is less than or equal to the parent
node, and each right subtree is greater than or equal to the parent node. Binary search trees are very common and useful data structures because they provide
logarithmic time in the average case for several common operations such as lookup, insertion, and deletion.
`);

document.write(`<br><br>
<b>Instructions:</b> We'll start simple. We've defined the skeleton of a binary search tree structure here in addition to a function to create nodes for our tree.
Observe that each node may have a <code>left</code> and <code>right</code> value. These will be assigned child subtrees if they exist. In our binary search tree, define two methods,
<code>findMin</code> and <code>findMax</code>. These methods should return the minimum and maximum value held in the binary search tree. If you get stuck,
reflect on the invariant that must be true for binary search trees: each left subtree is less than or equal to its parent and each right subtree is greater than or equal to
its parent. Let's also say that our tree can only store integer values. If the tree is empty, either method should return <code>null</code>.
`);

// HELPER CODE --------------------------------
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

// // SEED CODE --------------------------------
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    // change code above this line
};

// SOLUTION CODE --------------------------------
function BinarySearchTree() {
    
    this.root = null;

    // find minimum value in tree
    this.findMin = function(node = this.root) {
        if (node == null) {
            return null;
        } else {
            if (node.left == null) {
                return node.value;
            } else {
                return this.findMin(node.left);
            };
        };
    };

    // find maximum value in tree
    this.findMax = function(node = this.root) {
        if (node == null) {
            return null;
        } else {
            if (node.right == null) {
                return node.value;
            } else {
                return this.findMax(node.right);
            };
        };
    };

};

// TAIL CODE --------------------------------
BinarySearchTree.prototype = {
    add: function(value) {
        let node = this.root;
        if (node == null) {
          this.root = new Node(value);
          return;
        } else {
            function searchTree(node) {
                if (value < node.value) {
                    if (node.left == null) {
                        node.left = new Node(value);
                        return;
                    } else if (node.left != null) {
                        return searchTree(node.left)
                    };
                } else if (value > node.value) {
                    if (node.right == null) {
                        node.right = new Node(value);
                        return;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    };
                } else {
                    return null;
                };
            };
            return searchTree(node);
        };
    }
};

// TESTS --------------------------------

assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMin == 'function')})(), 'The binary search tree has a method called findMin.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMax == 'function')})(), 'The binary search tree has a method called findMax.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMin() == 1; })(), 'The findMin method returns the minimum value in the binary search tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMax !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMax() == 87; })(), 'The findMax method returns the maximum value in the binary search tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== 'function') { return false; }; if (typeof test.findMax !== 'function') { return false; }; return (test.findMin() == null && test.findMax() == null) })(), 'The findMin and findMax methods return null for an empty tree.');




