document.write(`
<b>Title:</b> Delete a Node with Two Children in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> Removing nodes that have two children is the hardest case to implement. Removing a node like this produces two subtrees that are no
longer connected to the original tree structure. How can we reconnect them? One method is to find the smallest value in the right subtree of the target
node and replace the target node with this value. Selecting the replacement in this way ensures that it is greater than every node in the left subtree it
becomes the new parent of but also less than every node in the right subtree it becomes the new parent of.<br><br>

Once this replacement is made the replacement node must be removed from the right subtree. Even this operation is tricky because the replacement may be
a leaf <i>or</i> it may itself be the parent of a right subtree. If it is a leaf we must remove its parent's reference to it. Otherwise, it must be the right
child of the target. In this case, we must replace the target value with the replacement value and make the target reference the replacement's right child.
`);

document.write(`<br><br>
<b>Instructions:</b> Let's finish our <code>remove</code> method by handling the third case. We've provided some code again for the first two cases.
Add some code now to handle target nodes with two children. Any edge cases to be aware of? What if the tree has only three nodes? Once you are
finished this will complete our deletion operation for binary search trees. Nice job, this is a pretty hard problem!
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

        // case 2: target has one child
        else if (children == 1) {
            let newChild = (target.left != null) ? target.left : target.right;
            if (parent == null) {
                target.value = newChild.value;
                target.left = null;
                target.right = null;
            } else if (newChild.value < parent.value) {
                parent.left = newChild;
            } else {
                parent.right = newChild;
            }
            target = null;
        }

        // case 3: target has two children, change code below this line

    };

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

        // case 2: target has one child
        else if (children == 1) {
            let newChild = (target.left != null) ? target.left : target.right;
            if (parent == null) {
                target.value = newChild.value;
                target.left = null;
                target.right = null;
            } else if (newChild.value < parent.value) {
                parent.left = newChild;
            } else {
                parent.right = newChild;
            }
            target = null;
        }

        // case 3: target has two children
        else if (children == 2) {
            let replacementParent = null;
            // replace target with minimum value in right subtree
            function findMin(node) {
                if (node.left == null) {
                    return node;
                } else {
                    replacementParent = node;
                    return findMin(node.left);
                };
            };
            let replacement = findMin(target.right);
            if (replacement.left == null && replacement.right == null) {
                target.value = replacement.value;
                if (replacementParent != null) {
                    replacementParent.left = null;
                } else {
                    target.right = null;
                }
            } else {
                target.value = replacement.value;
                target.right = replacement.right;
                replacement = null;
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
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == 'function') ? (test.remove(100) == null) : false})(), 'Trying to remove an element that doesn\'t exist returns null.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == 'function') ? (test.inorder() == null) : false})(), 'If the root node has no children, deleting it sets the root to null.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == 'function') ? (test.inorder().join('') == '567') : false})(), 'The remove method removes leaf nodes from the tree');
// tests for case 2:
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join('') == '-1'); })(), 'The remove method removes nodes with one child.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join('') == '27'); })(), 'Removing the root in a tree with two nodes sets the second to be the root.');
// tests for case 3:
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!test.isBinarySearchTree()) { return false; }; test.remove(11); if (!test.isBinarySearchTree()) { return false; }; test.remove(14); if (!test.isBinarySearchTree()) { return false; }; test.remove(19); if (!test.isBinarySearchTree()) { return false; }; test.remove(3); if (!test.isBinarySearchTree()) { return false; }; test.remove(50); if (!test.isBinarySearchTree()) { return false; }; test.remove(15); if (!test.isBinarySearchTree()) { return false; }; return (test.inorder().join('') == '147'); })(), 'The remove method removes nodes with two children while maintaining the binary search tree structure.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return (test.inorder().join('') == 50300); })(), 'The root can be removed on a tree of three nodes.');

