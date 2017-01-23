
document.write(`
<b>Title:</b> Use Depth First Search in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> We know how to search a binary search tree for a specific value. But what if we just want to explore the entire tree? Or what if we don't
have an ordered tree and we need to just search for a value? Here we will introduce some <i>tree traversal</i> methods which can be used to explore tree
data structures. First up is <b>depth-first search</b>. In depth-first search, a given subtree is explored as deeply as possible before the search continues
on to another subtree. There are three ways this can be done:<br><br>

1. <b>In-order:</b> Begin the search at the left-most node and end at the right-most node.<br>
2. <b>Pre-order:</b> Explore all the roots before the leaves.<br>
3. <b>Post-order:</b> Explore all the leaves before the roots.<br><br>

As you may guess, you may choose different search methods depending on what type of data your tree is storing and what you are looking for. For a binary search tree,
an inorder traversal returns the nodes in sorted order.
`);

document.write(`<br><br>
<b>Instructions:</b> Here we will create these three search methods on our binary search tree. Depth-first search is an inherently recursive operation which
continues to explore further subtrees so long as child nodes are present. Once you understand this basic concept, you can simply rearrange the order in which you explore
the nodes and subtrees to produce any of the three searches above. For example, in post-order search we would want to recurse all the way to a leaf node before
we begin to return any of the nodes themselves, whereas in pre-order search we would want to return the nodes first, and then continue recursing down the tree.<br><br>

Define <code>inorder</code>, <code>preorder</code>, and <code>postorder</code> methods on our tree. Each of these methods should return an array of items which represent
the tree traversal. Be sure to return the integer values at each node in the array, not the nodes themselves. Finally, return <code>null</code> if the tree is empty.
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

  this.inorder = function() {
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
  };

  this.preorder = function() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
          result.push(node.value);
          if (node.left != null) {
              traversePreOrder(node.left);
          };
          if (node.right != null) {
              traversePreOrder(node.right);
          };
      };
      traversePreOrder(this.root);
      return result;
    };
  };

  this.postorder = function(node, arr) {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
          if (node.left != null) {
              traversePostOrder(node.left);
          }
          if (node.right != null) {
              traversePostOrder(node.right);
          }
          result.push(node.value);
      };
      traversePostOrder(this.root);
      return result;
    }
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

// TESTS
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == 'function')})(), 'The binary search tree has a method called inorder.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == 'function')})(), 'The binary search tree has a method called preorder.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == 'function')})(), 'The binary search tree has a method called postorder.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join('') == '012345678910'); })(), 'The inorder method returns an array of the node values that result from an inorder traversal.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join('') == '710325469810'); })(), 'The preorder method returns an array of the node values that result from a preorder traversal.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join('') == '024653181097'); })(), 'The postorder method returns an array of the node values that result from a postorder traversal.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== 'function') { return false; }; return (test.inorder() == null); })(), 'The inorder method returns null for an empty tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== 'function') { return false; }; return (test.preorder() == null); })(), 'The preorder method returns null for an empty tree.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== 'function') { return false; }; return (test.postorder() == null); })(), 'The postorder method returns null for an empty tree.');