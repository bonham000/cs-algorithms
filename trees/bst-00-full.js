// HELPER CODE --------------------------------
const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

// node structure
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
};

// bst data structure
function BinarySearchTree() {
    
    this.root = null;
    
    // find minimum value in tree
    this.findMin = function(node = this.root) {
        if (node.left == null) {
            return node.value;
        } else {
            return this.findMin(node.left);
        };
    };

    // find maximum value in tree
    this.findMax = function(node = this.root) {
        if (node.right == null) {
            return node.value;
        } else {
            return this.findMax(node.right);
        };
    };

    this.isBinarySearchTree = function() {
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

    this.isBalanced = () => (this.findMinHeight() > this.findMaxHeight() - 1) ? false : true;
    
    this.findMinHeight = function(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

    this.findMaxHeight = function(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

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

    // add an element in a binary search tree
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

    // remove values from the tree
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

        // case 2: target is has one child
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
        };

    };

    // depth-first inorder traversal: visit nodes in sorted order
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

    // depth-first preorder traversal: visit all nodes before leaves
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

    // depth-first postorder traversal: visit all leaves before nodes
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
        };
    };

    // breadth-first search methods:
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
    };

    // invert the tree:
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
