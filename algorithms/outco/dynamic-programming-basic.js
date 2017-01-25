/* 
 *                       Target Practice VII                         
 *                                                                   
 *                       Dynamic Programming                         
 *                                                                   
 *  Instructions: Dynammic programming takes a lot of practice to    
 *                recognize as well as develop algorithms. Thus we   
 *                will be working on a few different problems using  
 *                dynammic programming.
 *
 */

'use strict';


/*
 *  1a. What are the two main requirements that determine whether a problem can be 
 *      solved using dynamic programming? Explain what they mean.
 */


/*
 *  1b. What is the top down approach to dynammic programming called?
 */


/*
 *  1c. What is the bottom up approach to dynammic programming called?
 */


/*
 *  2. Minimum Steps to One
 *
 *     Given a positive integer, you can perform any combination of these 3 steps:
 *      1.) Subtract 1 from it.
 *      2.) If its divisible by 2, divide by 2. 
 *      3.) If its divisible by 3, divide by 3.
 *
 *     Find the minimum number of steps that it takes get from N to 1
 * 
 *  Input: Positive Integer N
 *  Output:Integer
 */

function minSteps(n){
    if (n > 0) {
      var computed = [0, 0, 1, 1];
      var min;
      var current = 4;
      while (current <= n) {
          min = computed[current - 1] + 1;
          if (current % 3 === 0) min = computed[current / 3] + 1;
          if (current % 2 === 0) min = Math.min(min, computed[current / 2] + 1);
          computed[current] = min;
          current++;  
      };
      return computed[n];
    };
}

/*
 *  3. Given an array of binary values (0 and 1) and N number of flips (convert a 0 to a 1), 
 *     determine the maximum number of consecutive 1's that can be made.
 *
 *  Input: An Array of 1's and 0's, and an Integer N denoting the number of flips
 *  Output: Integer
 *
 *  Example: bitFlip([0,1,1,1,0,1,0,1,0,0], 2)
 *  Result: 7
 */

function bitFlip(arr, n){

  // ...

}


/*
 *  4. Given an array of postive integers, starting at the first index of the array.
 *     Each element in the array represents your maximum jump length at that position.
 *     What is the minimum number of jumps to reach the last index?
 *
 *  Input: Array of postive integers
 *  Output: Integer
 *
 *  Example: jump([2,3,1,1,4])
 *  Result: 2 because traveling from 2 -> 3 -> 4 uses 2 jumps
 */


function jumpCountToLast(arr){
  // YOUR WORK HERE
}




































////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

// code for capturing console.log output
var record = [];
(function () {
  var log = console.log;
  console.log = function () {
    record = record.concat(Array.prototype.slice.call(arguments));
    log.apply(this, Array.prototype.slice.call(arguments));
  };
}());


console.log('Minimum Steps to One Tests');
var testCount = [0, 0];

assert(testCount, 'should return 3 for 10', function(){
  var example = minSteps(10);
  return example === 3;
});

assert(testCount, 'should return 0 for 1', function(){
  var example = minSteps(1);
  return example === 0;
});

assert(testCount, 'should work for large numbers', function(){
  var example = minSteps(1334425);
  return example === 22;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Bit Flip Tests');
var testCount = [0, 0];

assert(testCount, 'should handle example case', function(){
  var example = bitFlip([0,1,1,1,0,1,0,1,0,0], 2);
  return example === 7;
});

assert(testCount, 'should handle smaller edge case where flip is allowed', function(){
  var example = bitFlip([0], 1);
  return example === 1;
});

assert(testCount, 'should handle smaller edge case where flip is not allowed', function(){
  var example = bitFlip([0], 0);
  return example === 0;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Jump Count To Last Tests');
var testCount = [0, 0];

assert(testCount, 'should handle example case', function(){
  var example = jumpCountToLast([2,3,1,1,4]);
  return example === 2;
});

assert(testCount, 'should handle medium-sized case', function(){
  var example = jumpCountToLast([1,2,5,2,5,7,4,1,3,2,3,1,1,3,2,1]);
  return example === 6;
});

assert(testCount, 'should handle large case', function(){
  var example = jumpCountToLast([3,1,1,2,4,6,2,1,3,2,2,4,3,1,4,2,1,3,1,2,5,2,5,7,4,1,3,1,2,5,2,5,7,4,1,3,2,3,1,1,7,4,1,3,2,3,1,1,7,4,1,3,2,3,1,1,3,2,1]);
  return example === 16;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');




// function for checking if arrays are equal
function arraysEqual(arr1, arr2) {
  if(arr1.length !== arr2.length)
    return false;
  for(var i = arr1.length; i--;) {
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

// custom assert function to handle tests
// Array count : keeps track out how many tests pass and how many total
//   in the form of a two item array i.e., [0, 0]
// String name : describes the test
// Function test : performs a set of operations and returns a boolean
//   indicating if test passed 
function assert(count, name, test){
  if(!count || !Array.isArray(count) || count.length !== 2) { 
    count = [0, '*']; 
  } else {
    count[1]++;
  }
  
  var pass = 'false';
  var errMsg = null;
  try {
    if (test()) { 
      pass = ' true';
      count[0]++;
    } 
  } catch(e) {
    errMsg = e;
  } 
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}



