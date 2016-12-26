document.write(`
<b>Title:</b> Use Breadth First Search in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> Here we will introduce another tree traversal method: <b>breadth-first search</b>. In contrast to the depth-first search methods from the last
challenge, breadth-first search explores all the nodes in a given level within a tree before continuing on to the next level. Typically, queues are utilized
as helper data structures in the design of breadth-first search algorithms.<br><br>

In this method, we start by adding the root node to a queue. Then we begin a loop where we dequeue the first item in the queue, add it to a new array, and then
inspect both its child subtrees. If it's children are not <code>null</code>, they are each enqueued. This process continues until the queue is empty.
`);

document.write(`<br><br>
<b>Instructions:</b> Let's create a breadth-first search method in our tree called <code>levelOrder</code>. This method should return an array containing the
values of all the tree nodes, explored in a breadth-first manner. Be sure to return the values in the array, not the nodes themselves. A level should be
traversed from left to right. Next, let's write a similar method called <code>reverseLevelOrder</code> which performs the same search but in the reverse
direction (right to left) at each level.
`);

// HELPER CODE --------------------------------
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
};

// SEED CODE --------------------------------
function BinarySearchTree() {
    this.root = null;
    // change code below this line

    // change code above this line
};

// SOLUTION CODE --------------------------------
function BinarySearchTree() {

    this.root = null;

    this.levelOrder = function() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.value);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };

    this.reverseLevelOrder = function() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.value);
                if (node.right != null) {
                    Q.push(node.right);
                };
                if (node.left != null) {
                    Q.push(node.left);
                };
            };
            return result;
        } else {
            return null
        };
    }

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
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == 'function')})(), 'The binary search tree has a method called levelOrder.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == 'function')})(), 'The binary search tree has a method called reverseLevelOrder.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join('') == '719038102546'); })(), 'The levelOrder method returns an array of the tree node values explored in level order.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join('') == '791108305264'); })(), 'The reverseLevelOrder method returns an array of the tree node values explored in reverse level order.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== 'function') { return false; }; return (test.levelOrder() == null); })(), 'The levelOrder method returns null for an empty tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== 'function') { return false; }; return (test.reverseLevelOrder() == null); })(), 'The reverseLevelOrder method returns null for an empty tree.');
