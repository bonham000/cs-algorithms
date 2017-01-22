function kthSmallest(array, k){

  if (k > array.length) return;

  function quickHelper(start, end) {

    if (start === end) return array[start];

    var pivot = array[start];
    var edge = start + 1;

    for (var i = start + 1; i < end; i++) {
      if (array[i] <= pivot) {
        [array[edge], array[i]] = [array[i], array[edge]];
        edge++;
      }
    }

    var mid = edge - 1;

    [array[start], array[mid]] = [array[mid], array[start]];

    if (mid === k - 1) {
      return array[mid];
    } else if (mid < k) {
      return quickHelper(mid + 1, end);
    } else {
      return quickHelper(start, mid);
    }

  }

  return quickHelper(0, array.length);

};