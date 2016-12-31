
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

};

var bst = new BinarySearchTree();

bst.add(2);
bst.add(1);
bst.add(3);
bst.add(34);
bst.add(24);
bst.add(76);
bst.add(87);
bst.add(24);
bst.add(7);
bst.add(9);
bst.add(3);

displayTree(bst);

console.log(bst.isPresent(3));
console.log(bst.isPresent(5));
console.log(bst.isPresent(9));
console.log(bst.isPresent(87));
console.log(bst.isPresent(30));






