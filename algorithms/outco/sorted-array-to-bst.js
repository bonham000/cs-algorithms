// with auxiliary memory of O(n);
// time complexity: O(n^2) ... ?
var sortedToBinaryTree = function(array) {
  let result = [];
  function processData(arr) {
    if (arr.length == 0) return;
    let mid = Math.floor(arr.length / 2);
    result.push(arr[mid]);
    if (arr.length > 0) {
      processData(arr.slice(0, mid));
      processData(arr.slice(mid + 1));
    }
  };
  processData(array);
  return result;
};

// in place with constant memory
// time complexity: O(n)
var sortedToBinaryTreeInPlace = function(array) {
  let result = [];
  function processData(B, E) {
    let M = Math.floor((E - B) / 2) + B;
    result.push(array[M]);
    if (M - B > 0) processData(B, M - 1);
    if (E - M > 0) processData(M + 1, E);
  };
  processData(0, array.length - 1);
  return result;
};