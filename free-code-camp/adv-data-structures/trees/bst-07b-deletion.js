document.write(`
<b>Title:</b> Delete a Node with One Child in a Binary Search Tree`)

document.write(`<br><br>
<b>Description:</b> Now that we can delete leaf nodes let's move on to the second case: deleting a node with one child.
For this case, say we have a tree with the following nodes <code>1 — 2 — 3</code> where <code>1</code> is the root.
To delete <code>2</code>, we simply need to make the right reference in <code>1</code> point to <code>3</code>. More generally,
to delete a node with only one child, we make that node's parent reference the next node in the tree.
`);

document.write(`<br><br>
<b>Instructions:</b> We've provided some code in our <code>remove</code> method that accomplishes the tasks from the last
challenge. We find the <code>target</code> to delete and its <code>parent</code> and define the number of <code>children</code>
the target node has. Let's add the next case here for target nodes with only one child. Here, we'll have to determine if the
single child is a left or right branch in the tree and then set the correct reference in the parent to point to this node. In
addition, let's account for the case where the target is the root node (this means the <code>parent</code> node will be
<code>null</code>). Feel free to replace all the starter code with your own as long as it passes the tests.
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

        // case 2: target has one child, change code below this line
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
// tests for case 2:
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join('') == '-1'); })(), 'The remove method removes nodes with one child.');
assert((function() { let test = false; if (typeof BinarySearchTree !== 'undefined') { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== 'function') { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join('') == '27'); })(), 'Removing the root in a tree with two nodes sets the second to be the root.');
