function howDeep(input, target) {
  var depth = 0;

  function searchHelper(array, z) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        depth = z;
        return;
      } else if (Array.isArray(array[i])) {
        searchHelper(array[i], z + 1);
      }
    };
  }

  searchHelper(input, 0);
  return depth;

}

function howDeep(array, target, depth = 0) {
  return array.reduce((combined, current) => {
    if (Array.isArray(current)) {
      return combined.concat(howDeep(current, target, depth + 1));
    } else if (current === target) {
      return combined.concat(depth)
    } else {
      return combined;
    }
  }, []);
};

let myNestedArray = [ 1,
  [ 2, 'coding is fun!', 3, 4, true ],
  [ true, false, "xxxxx",
    [ 3, 4, 5,
      [ 4, 5, 6, 7,
        [1, 2, 3, 'coding is fun!']
      ]
    ]
  ],
  [
    2, 3, 4, 5, 6, 7, 8, 100000
  ]
];