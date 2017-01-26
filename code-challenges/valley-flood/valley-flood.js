
function valley(array) {

  var total = 0;
  var maxLeft = [array[0]];
  var maxRight = [array[array.length - 1]];

  for (var i = 1; i < array.length; i++) {
    maxLeft.push(Math.max(array[i], maxLeft[i - 1]));
  }

  for (var i = array.length - 2; i >= 0; i--) {
    maxRight.unshift(Math.max(array[i], maxRight[0]));
  }

  for (var i = 0; i < array.length; i++) {
    total += (Math.min(maxLeft[i], maxRight[i]) - array[i]);
  }

  return total;

}

var example = [2, 4, 5, 2, 3, 4, 6, 6, 5]; // should return 6 units
var valley1 = [2, 4, 5, 2, 3, 4, 6, 6, 4, 5]; // should return 7 units
var valley2 = [9, 8, 7, 6, 5, 5, 6, 7, 8, 9]; // should return 20 units
var valley3 = [3, 2, 1, 2]; // should return 1 unit
var valley4 = [5, 4, 3, 2, 1, 5]; // should return 10 units
var valley5 = [5, 1, 2, 3, 4, 5]; // should return 10 units
var valley6 = [5]; // should return 0 units
var valley7 = [5, 3]; // should return 0 units
var valley8 = [5, 4, 7]; // should return 1 unit
var valley9 = [5, 1, 7]; // should return 4 units
var valley10 = [9, 8, 7, 6, 4, 4, 6, 7, 8, 9]; // should return 22 units
var valley11 = [2,3,2,3,10,9,8,7,6,5,6,7,4,3,2,3,10,1,10,2]; // should return 60

console.clear();

// run tests:
console.log('Example:',  valley(example)); // 6
console.log('Valley 1:', valley(valley1)); // 7
console.log('Valley 2:', valley(valley2)); // 20
console.log('Valley 3:', valley(valley3)); // 1
console.log('Valley 4:', valley(valley4)); // 10
console.log('Valley 5:', valley(valley5)); // 10
console.log('Valley 6:', valley(valley6)); // 0
console.log('Valley 7:', valley(valley7)); // 0
console.log('Valley 8:', valley(valley8)); // 1
console.log('Valley 9:', valley(valley9)); // 4
console.log('Valley 10:', valley(valley10)); // 22
console.log('Valley 11:', valley(valley11)); // 60

