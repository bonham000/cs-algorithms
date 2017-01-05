// find the minimum height in a binary tree
var minDepth = function(root) {
    if (root == null) return 0;
    let min = null;
    (function findMin(node, len) {
        len++;
        if (node.left == null && node.right == null) {
            if (min == null) min = len;
            if (len < min) min = len;
        } else {
            if (node.left != null) findMin(node.left, len);
            if (node.right != null) findMin(node.right, len);
        }
    })(root, 0);
    return min;
};