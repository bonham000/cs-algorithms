
// NOTES: *************************************************************

/* I've provided three solutions to flatten an array, all use recursion.
   Running this file will execute several tests against each function
   and output the results to the console, reporting errors for any
   failing tests.

   I think the simplest and most elegant solution is the first, which
   uses a functional approach to reduce the initial array according to
   the following logic: For every element, if it is an array flatten it
   and accumulate the result, otherwise, just accumulate the current element.

   Each function also assumes it will only receive an array as input, some
   more code would be needed if there was a possibility that the input could
   be different, e.g. a string, object, etc. */


// SOLUTIONS: *************************************************************

// Approach 1: recursive + functional approach using reduce:
function flatten1(array) {
  
  return array.reduce((total, current) => {
    if (Array.isArray(current)) {
      return total.concat(flatten1(current));
    } else if (current) {
      return total.concat(current);
    } else {
      return total;
    }
  }, []);

};

// Approach 2: recursive approach using helper method recursion and side effects:
function flatten2(array) {

  var result = [];

  function flattenHelper(array, index) {

    if (Array.isArray(array[index])) {
      flattenHelper(array[index], 0);
    } else if (array[index]) {
      result.push(array[index]);
    }

    if (index < array.length - 1) {
      flattenHelper(array, index + 1);
    }

  }
  
  flattenHelper(array, 0);
  return result;

};

// Approach 3: recursive approach using iteration and side effects:
function flatten3(array) {

  var result = [];

  function eatArray(array) {

    while (array.length > 0) {
      var firstElement = array.shift();
      if (!Array.isArray(firstElement)) {
        if (firstElement) {
          result.push(firstElement);  
        }
      } else {
        eatArray(firstElement);
      }
    }

  }

  eatArray(array);
  return result;

};


// TESTS: *************************************************************

// helper function for testing to verify equality between two one-dimensional arrays:
function arrayEquals(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}

// array of test cases and expected results:
var tests = [
  {
    test: [],
    solution: []
  },
  {
    test: [[[[[[]]]]]],
    solution: []
  },
  {
    test: [[[],[],[]][[],[[[]]],[],[[]]]],
    solution: []
  },
  {
    test: [5],
    solution: [5]
  },
  {
    test: [1,2,3,4,5,6,7,8,9],
    solution: [1,2,3,4,5,6,7,8,9]
  },
  {
    test: [4,5,6,[[[[[]]], 11]], 19],
    solution: [4,5,6,11,19]
  },
  {
    test: [[1,2,[3]],4],
    solution: [1,2,3,4]
  },
  {
    test: [1,[2],[3,[[4]]]],
    solution: [1,2,3,4]
  },
  {
    test: [[[5],[7],[[9]]],[[2],[4],18]],
    solution: [5,7,9,2,4,18]
  },
  {
    test: [[[[[7]],[11,12,13]],[19],[20]],[[14,16]]],
    solution: [7,11,12,13,19,20,14,16]
  },
];

// execute tests for all three functions and log results to the console:
console.log('Starting tests:\n');

tests.forEach((testCase, index) => {

  var { test, solution } = testCase;

  console.log(`\nRunning Test ${index + 1}: ${JSON.stringify(test)} => ${JSON.stringify(solution)}`);

  var fn1 = flatten1(test);
  console.log(fn1);
  console.assert(arrayEquals(fn1, solution), `Flatten 1 doesn't pass test case ${index + 1}: ${solution}`);

  var fn2 = flatten2(test);
  console.log(fn2);
  console.assert(arrayEquals(fn2, solution), `Flatten 2 doesn't pass test case ${index + 1}: ${solution}`);

  var fn3 = flatten3(test);
  console.log(fn3);
  console.assert(arrayEquals(fn3, solution), `Flatten 3 doesn't pass test case ${index + 1}: ${solution}`);
  
});

console.log('\nAll tests complete!');

