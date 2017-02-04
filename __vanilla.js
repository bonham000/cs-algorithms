"use strict";

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this.root = null;
  this.getMaxDepth = function() {
    function dig(node) {
      if (!node) {
        return -1;
      }
      return Math.max(dig(node.left), dig(node.right)) + 1;
    }
    return dig(this.root);
  }
  this.last = null;
  this.addUnbalanced = function(val) {
    var add = new Node(val);
    if (!this.root) {
      this.root = add;
      this.last = add;
    } else {
      var last = this.last;
      last.right = add;
      this.last = add;
    }
  }
  this.add = function(val) {
    if (!this.root) {
      this.root = new Node(val);
      this.height++;
    } else {
      var Q = [this.root];
      while (Q.length > 0) {
        var current = Q.shift();
        if (!current.left) {
          current.left = new Node(val);
          break;
        } else if (!current.right) {
          current.right = new Node(val);
          break;
        }
        if (current.left) Q.push(current.left);
        if (current.right) Q.push(current.right);
      }
    }
  }
}

function File() {
  var data = [];
  this.write = function(value) {
    data.push(value);
  }
  this.read = function() {
    var tree = new BinaryTree();
    for (var element of data) {
      tree.addUnbalanced(element);
    };
    return tree.root;
  }
  this.print = function() {
    console.log(JSON.stringify(data));
  }
}

function writeTree(tree) {

  var Q = [];
  Q.push({depth: 0, node: tree.root});

  while (Q.length > 0) {
    var current = Q.shift();
    if (current.depth > tree.getMaxDepth()) break;
    file.write(current.node.val);
    if (current.node.left) {
      Q.push({depth: current.depth + 1, node: current.node.left});
    } else {
      Q.push({depth: current.depth + 1, node: {val: null}});
    }
    if (current.node.right) {
      Q.push({depth: current.depth + 1, node: current.node.right});
    } else {
      Q.push({depth: current.depth + 1, node: {val: null}});
    }

  }

}

var file = new File();
var tree = new BinaryTree();
var nodes = [5, 2, 3, 4, 5, 6, 7, 8];
nodes.forEach(node => tree.addUnbalanced(node));
console.log(tree);
writeTree(tree);
console.log('Max Depth: ' + tree.getMaxDepth());
file.print();
console.log(file.read());






