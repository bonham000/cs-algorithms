function valleyFlood(array) {

  let bounds = [];
  let highest = null;
  let leftBound = null;
  let rightBound = null;

  for (let i = 0; i < array.length; i++) {
    if (highest != null && array[i] >= array[highest]) {

      var newBounds = [];
      var reset = null;
      for (var j = 0; j < bounds.length; j++) {
        if (bounds[j][0] === highest) {
          var newElement = [highest, i];
          newBounds.push(newElement);
          break;
        }
        newBounds.push(bounds[j]);
      }
      bounds = newBounds;
      highest = null;

      if (array[i + 1] < array[i] && leftBound === null) {
        if (highest === null) {
          highest = i;
        } else if (array[i] >= array[highest]) {
          highest = i;
        }
        leftBound = i;
      }
    } else if (array[i + 1] < array[i] && leftBound === null) {
      if (highest === null) {
        highest = i;
      } else if (array[i] >= array[highest]) {
        highest = i;
      }
      leftBound = i;
    } else if (array[i + 1] < array[i] && rightBound != null) {
      bounds.push([leftBound, rightBound + 1]);
      leftBound = null;
      rightBound = null;
    } else if (array[i + 1] > array[i]) {
      rightBound = i;
      if (array[i + 1] >= array[leftBound]) {
        bounds.push([leftBound, rightBound + 1]);
        leftBound = null;
        rightBound = null;
      }
    }
  }

  if (rightBound != null) bounds.push([leftBound, rightBound + 1]);

  let volume = 0;

  function calculateVolume(left, right) { 
    let height = (array[left] < array[right]) ? array[left] : array[right];
    for (let i = left; i < right; i++) {
      if (array[i] < height) {
        volume += height - array[i];
      }
    }
  }

  bounds.forEach(bounds => calculateVolume(bounds[0], bounds[1]));

  return volume;

}

var example = [2, 4, 5, 2, 3, 4, 6, 6, 5]; // should return 6 units
var valley1 = [2, 4, 5, 2, 3, 4, 6, 6, 4, 5]; // should return 7 units
var valley2 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9]; // should return 20 units
var valley3 = [3, 2, 1, 2]; // should return 1 unit
var valley4 = [5, 4, 3, 2, 1, 5]; // should return 10 units
var valley5 = [5, 1, 2, 3, 4, 5]; // should return 10 units

// additional valleys for testing (mostly edge cases):
var valley6 = [5]; // should return 0 units
var valley7 = [5, 3]; // should return 0 units
var valley8 = [5, 4, 7]; // should return 1 unit
var valley9 = [5, 1, 7]; // should return 4 units
var valley10 = [9, 8, 7, 6, 4, 4, 6, 7, 8, 9]; // should return 22 units

var valley11 = [2,3,2,3,10,9,8,7,6,5,6,7,4,3,2,3,10,1,10,2]; // should return 50

console.clear();

// run tests:
// console.log('Example:',  valleyFlood(example)); // 6
// console.log('Valley 1:', valleyFlood(valley1)); // 7
// console.log('Valley 2:', valleyFlood(valley2)); // 20
// console.log('Valley 3:', valleyFlood(valley3)); // 1
// console.log('Valley 4:', valleyFlood(valley4)); // 10
// console.log('Valley 5:', valleyFlood(valley5)); // 10
// console.log('Valley 6:', valleyFlood(valley6)); // 0
// console.log('Valley 7:', valleyFlood(valley7)); // 0
// console.log('Valley 8:', valleyFlood(valley8)); // 1
// console.log('Valley 9:', valleyFlood(valley9)); // 4
// console.log('Valley 10:', valleyFlood(valley10)); // 22
console.log('Valley 11:', valleyFlood(valley11)); // 52











