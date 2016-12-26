document.write(`
<b>Title:</b> Invert a Binary Tree`)

document.write(`<br><br>
<b>Instructions:</b> Here will we create a function to invert a binary tree. Given a binary tree, we want to produce a new
tree that is equivalently the mirror image of this tree. Running an inorder traversal on an inverted tree will explore
the nodes in reverse order when compared to the inorder traversal of the original tree. Write a method to do this called
<code>invert</code> on our binary tree. Calling this method should invert the current tree structure. Ideally, we would like
to do this in-place in linear time. That is, we only visit each node once and we modify the existing tree structure as we
go, without using any additional memory. Good luck!
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

    this.invert = function(node = this.root) {      
        if (node == null) {
            return null;
        } else {
            [node.left, node.right] = [node.right, node.left];
            this.invert(node.left);
            this.invert(node.right);
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
    },
    inorder: function() {
        if (this.root == null) {
          return null;
        } else {
          var result = new Array();
          function traverseInOrder(node) {
              if (node.left != null) {
                  traverseInOrder(node.left);
              };
              result.push(node.value);
              if (node.right != null) {
                  traverseInOrder(node.right);
              };
          }
          traverseInOrder(this.root);
          return result;
        };
    }
};

// TESTS --------------------------------
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == 'function')})(), 'The binary search tree has a method called invert.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== 'function') { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return test.inorder().join('') == '877345348741'; })(), 'The invert method correctly inverts the tree structure.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== 'function') { return false; }; return (test.invert() == null); })(), 'Inverting an empty tree returns null.');

