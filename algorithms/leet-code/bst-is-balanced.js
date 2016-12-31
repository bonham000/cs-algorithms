// check if a binary tree is balanced
// for this algorithm, a balanced tree is one in which the
//height of each subtree differs by no more than 1
var isBalanced = function(root) {
    if (root == null) return true;
    let pass = true;
    function depthSearch(node) {
        if (node == null) return -1;
        
        let left = depthSearch(node.left);
        let right = depthSearch(node.right);
        
        let max = min = null;
        
        if (left > right) {
            max = left;
            min = right;
        } else {
            max = right;
            min = left;
        };
        
        if (max > min + 1) {
            pass = false
        } else if (min < max - 1) {
            pass = false;
        };
        
        return max + 1
        
    }
    depthSearch(root);
    return pass;
};