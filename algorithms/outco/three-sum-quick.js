// use quicksort and then search for a matching trio that sums to zero
function threeSum(array) {

  function quicksort(array) {
    if (array.length < 2) return array;
    var pivot = array[0];
    var swap = 1;
    for (var i = 1; i < array.length; i++) {
      if (array[i] <= pivot) {
        [array[swap], array[i]] = [array[i], array[swap]];
        swap++;
      }
    }
    var swap = swap - 1;
    [array[0], array[swap]] = [array[swap], array[0]];
    var left = quicksort(array.slice(0, swap));
    var right = quicksort(array.slice(swap + 1));
    return [...left, array[swap], ...right];
  }

  var sorted = quicksort(array);
  var left = 0;
  var right = array.length - 1;
  
  for (var i = 0; i < sorted.length; i++) {
    var sum = sorted[left] + sorted[left + 1] + sorted[right];
    if (sum === 0) {
      return [sorted[left], sorted[left + 1], sorted[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }

  return false;

}