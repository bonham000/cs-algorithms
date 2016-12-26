document.write(`
<b>Title:</b> Delete a Leaf Node in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> This is the first of three challenges where we will implement a more difficult operation in binary
search trees: deletion. Deletion is difficult because removing nodes breaks links in the tree. These links must be carefully
reestablished to ensure the binary tree structure is maintained. For some deletions, this means the tree must be rearranged.
In general, you will encounter one of three cases when trying to delete a node:<br><br>

1) <b>Leaf Node:</b> The target to delete has zero children.<br>
2) <b>One Child:</b> The target to delete only has one child.<br>
3) <b>Two Children:</b> The target to delete has two child nodes.<br><br>

Removing a leaf node is easy, we simply remove it. Deleting a node with one child is also relatively easy, we simply remove it and
link its parent to child of the node we deleted. Removing a node with two children is more difficult, however, because this creates two
child nodes that need to be reconnected to the parent tree. We'll see how to deal with this case in the third challenge. Additionally,
you need to be mindful of some edge cases when handling deletion. What if the tree is empty? What if the node to delete is the root node?
What if there are only two elements in the tree? For now, let's handle the first case where we delete a leaf node.
`);

document.write(`<br><br>
<b>Instructions:</b> Create a method on our binary tree called <code>remove</code>. We'll build the logic for our deletion operation in here.
First, you'll want to create a function within <code>remove</code> that finds the node we are trying to delete in the current tree. If the node
is not present in the tree, <code>remove</code> should return <code>null</code>. Now, if the target node is a leaf node with no children, then the parent
reference to it should be set to <code>null</code>. This effectively deletes the node from the tree. To do this, you will have to keep track of
the parent of the node we are trying to delete as well. It will also be useful to create a way to track the number of children the target node has,
as this will determine which case our deletion falls under.<br><br>

We will handle the second and third cases in the next challenges. Good luck!
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
    // case 1: target has no children, change code below this line
};

// SOLUTION CODE --------------------------------
function BinarySearchTree() {

    this.root = null;

    this.remove = function(value) {

        if (this.root == null) {
            return null;
        };

        let target;
        let parent = null;

        // find the target value and its parent
        (function findValue(node = this.root) {
            if (value == node.value) {
                target = node;
            } else if (value < node.value && node.left != null) {
                parent = node;
                return findValue(node.left);
            } else if (value < node.value && node.left == null) {
                return null;
            } else if (value > node.value && node.right != null) {
                parent = node;
                return findValue(node.right);
            } else {
                return null;
            };
        }).bind(this)();

        if (target == null) {
            return null;
        }

        // count the children of the target to delete
        let children = (target.left != null ? 1 : 0) + (target.right != null ? 1 : 0);

        // case 1: target has no children
        if (children == 0) {
            if (target == this.root) {
                this.root = null;
            }
            else {
                if (parent.left == target) {
                    parent.left = null;
                } else {
                    parent.right = null;
                };
            };
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
    },    
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
        }
    }
};

// TESTS --------------------------------
// general tests:
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() }; return (typeof test == 'object')})(), 'The BinarySearchTree data structure exists.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function')})(), 'The binary search tree has a method called remove.');
// tests for case 1:
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; return (test.remove(100) == null); })(), 'Trying to remove an element that doesn\'t exist returns null.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })(), 'If the root node has no children, deleting it sets the root to null.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join('') == '567'); })(), 'The remove method removes leaf nodes from the tree');
