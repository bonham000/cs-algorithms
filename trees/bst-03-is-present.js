document.write(`
<b>Title:</b> Check if an Element is Present in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> Now that we have a general sense of what a binary search tree is let's talk about it in a little more detail. Binary search trees
provide logarithmic time for the common operations of lookup, insertion, and deletion in the average case, and linear time in the worst case. Why is this?
Each of those basic operations requires us to find an item in the tree (or in the case of insertion to find where it should go) and because of the tree
structure at each parent node we are branching left or right and effectively excluding half the size of the remaining tree. This makes the search
proportional to the logarithm of the number of nodes in the tree, which creates logarithmic time for these operations in the average case.<br><br>

Ok, but what about the worst case? Well, consider constructing a tree from the following values, adding them left to right: 10, 12, 17, 25. Following our rules
for a binary search tree, we will add 12 to the right of 10, 17 to the right of this, and 25 to the right of this. Now our tree resembles a linked list and
traversing it to find 25 would require us to traverse all the items in linear fashion. Hence, linear time in the worst case. The problem here is that the tree is <i>unbalanced</i>.
We'll look a little more into what this means in the following challenges.
`);

document.write(`<br><br>
<b>Instructions:</b> In this challenge, we will create a utility for our tree. Write a method <code>isPresent</code> which takes an integer value as input and returns
a <code>boolean</code> value for the presence or absence of that value in the binary search tree.
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
    this.isPresent = function(element) {
        if (this.root != null) {
            function searchTree(node) {
                if (element == node.value) {
                    return true;
                } else if (element < node.value) {
                    if (node.left != null) {
                        return searchTree(node.left);
                    } else {
                        return false;
                    };
                } else {
                    if (node.right != null) {
                        return searchTree(node.right);
                    } else {
                        return false;
                    };
                };
            };
            return searchTree(this.root);
        } else {
            return false;
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
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == 'function')})(), 'The binary search tree has a method called isPresent.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })(), 'The isPresent method correctly checks for the presence of absence of elements added to the tree.')
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== 'function') { return false; }; return test.isPresent(5) == false; })(), 'isPresent handles cases where the tree is empty.');