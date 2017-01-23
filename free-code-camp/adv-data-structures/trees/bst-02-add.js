document.write(`
<b>Title:</b> Add a New Element to a Binary Search Tree`)

document.write(`<br><br>
<b>Instructions:</b> Now that we have an idea of the basics lets write a more complex method.
In this challenge, we will create a method to add new values to our binary search tree. The method should be called <code>add</code> and it should
accept an integer value to add to the tree. Take care to maintain the invariant of a binary search tree:
the value in each left child should be less than or equal to the parent value, and the value in each right child should be greater than or equal to
the parent value. Here, let's make it so our tree cannot hold duplicate values. If we try to add a value that already exists, the method should return
<code>null</code>. Otherwise, if the addition is successful, <code>undefined</code> should be returned.<br><br>

<i>Hint:</i> trees are naturally recursive data structures!
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
    this.add = function(value) {
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
    };
};

// TAIL CODE --------------------------------
BinarySearchTree.prototype = {
    isBinarySearchTree() {
        if (this.root == null) {
            return null;
        } else {
            let check = true;
            function checkTree(node) {
                if (node.left != null) {
                    let left = node.left;
                    if (left.value > node.value) {
                        check = false;
                    } else {
                        checkTree(left);
                    }
                }
                if (node.right != null) {
                    let right = node.right;
                    if (right.value < node.value) {
                        check = false;
                    } else {
                        checkTree(right);
                    };
                };
            };
            checkTree(this.root);
            return check;
        };
    }
};

// TESTS --------------------------------
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == 'function')})(), 'The binary search tree has a method called add.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.isBinarySearchTree()); })(), 'The add method adds elements according to the binary search tree rules.')
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== 'function') { return false; }; test.add(4); return test.add(4) == null; })(), 'Adding an element that already exists returns null');