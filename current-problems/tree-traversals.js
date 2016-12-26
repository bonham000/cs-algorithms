
function QueueNode(ref) {
    this.node = ref;
};

function Queue() {

    let collection = new Array();
    
    this.enqueue = function(item) {
        collection.push(new QueueNode(item));
    };
    
    this.dequeue = function() {
        return collection.shift();
    };

    this.values = function() {
        return collection;
    };

    this.isEmpty = function() {
        return collection.length > 0 ? false : true;
    };

};

// ---------------------------------------------------------------------------

// this helper function prints out the current tree structure to the console:
function displayTree(tree) {
    console.log(JSON.stringify(tree, null, 2))
};

// this helper function defines new nodes for the tree:
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    
    this.root = null;

     // add an element in a BST
    this.add = function(val) {
        var node = this.root;
        if (node == null) {
            this.root = new Node(val);
            return ('Initialized tree with value: ', val);
        } else {
            function searchTree(node) {
                if (val < node.value) {
                    if (node.left == null) {
                        node.left = new Node(val);
                        return 'Added new value to tree.'
                    } else if (node.left != null) {
                        return searchTree(node.left)
                    }
                } else if (val > node.value) {
                    if (node.right == null) {
                        node.right = new Node(val);
                        return 'Added new value to tree.'
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    }
                } else {
                    return 'Value already exists';
                };
            };
            return searchTree(node);
        };
    };

    // check the tree for the presence of an element
    this.isPresent = function(element) {
        var node = this.root;
        if (node != null) {
            function searchTree(node) {
                if (element == node.value) {
                    return true;
                } else if (element < node.value && node.left == null) {
                    return false;
                } else if (element < node.value && node.left != null) {
                    return searchTree(node.left);
                } else if (element > node.value && node.right == null) {
                    return false;
                } else {
                    return searchTree(node.right);
                };
            }
            return searchTree(node);
        } else {
            return false;
        };
    };

    this.levelOrderTraversal = function() {
        let result = new Array();
        let Q = new Queue();

        Q.enqueue(this.root);

        while (!Q.isEmpty()) {
            let node = Q.dequeue();
            result.push(node.node.value);
            if (node.node.left != null) {
                Q.enqueue(node.node.left);
            };
            if (node.node.right != null) {
                Q.enqueue(node.node.right);
            };
        };

        return result;

    };

    // inorder traversal
    this.inorder = function() {
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

    // preorder traversal
    this.preorder = function() {
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

    // postorder traversal
    this.postorder = function(node, arr) {
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

    // size of tree
    this.size = function() {
        return ('There are ' + this.inorder().length + ' elements in the tree.');
    };
};

// test tree

var bst = new BinarySearchTree();

bst.add(7);
bst.add(1);
bst.add(0);
bst.add(3);
bst.add(2);
bst.add(5);
bst.add(4);
bst.add(6);
bst.add(9);
bst.add(8);
bst.add(10);

//displayTree(bst);

var inOrder = bst.inorder();
console.log('In-Order Traversal: ', inOrder);

var preOrder = bst.preorder();
console.log('Pre-Order Traversal: ', preOrder);

var postOrder = bst.postorder();
console.log('Post-Order Traversal: ', postOrder);

var breadthFirst = bst.levelOrderTraversal();
console.log('Level-Order Traversal: ', breadthFirst);

console.log(bst.size());

