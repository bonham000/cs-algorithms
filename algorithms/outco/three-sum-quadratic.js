function threeSum(array) {

  var cache = {};
  array.forEach((n, i) => cache[n] = i);

  for (var a = 0; a < array.length; a++) {
    var current = array[a];
    for (var b = a + 1; b < array.length; b++) {
      var needed = -(current + array[b]);
      if (needed in cache && cache[needed] != a && cache[needed] != b) {
        return [a, b, cache[needed]];
      };
    };
  };

  return false;

};