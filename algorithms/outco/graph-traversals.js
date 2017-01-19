/* 
 *                       Target Practice VI                          
 *                                                                   
 *                        Traversals Pt. 2                           
 *                                                                   
 *  Instructions: One of the most fundamental components of working  
 *                with trees and graphs is traversals.  We will      
 *                focus primarily on this piece to build your        
 *                foundation of these data structures.               
 *                                                                   
 */

'use strict';

/*
 *  4. For the example graph below, what is the expected output if we printed each
 *     vertex value from vertex A outwards using:
 *
 *     a. BREADTH FIRST traversal?
 *
 *     b. DEPTH FIRST traversal?
 *
 *     NOTE: Assume the order of edges will be alphabetical. E.g., Vertex D has edges to
 *           5 vertices in the following order: B, C, E, F, G
 *
 *     NOTE: The traversal should take care of redundancy and not print the same vertex
 *           value twice.
 *
 *     Example Graph:
 *
 *              B     E
 *            /   \  /
 *          A       D  --- F
 *            \   /   \   /
 *              C       G
 */

/*** Next we need a graph.  Use an existing graph class that you have built. ***/

/*
 *  5a. Build a replica of the example graph in Problem 4. to use as an example.
 */


/*
 *  5b. Using a queue and while loop, write a function that takes in a graph and
 *      outputs an array of values from vertex A outwards ordered by BREADTH 
 *      FIRST traversal.
 *
 *  Input: Graph
 *  Output: Array
 *
 *  NOTE: Confirm with your answer from problem 4a.
 *
 *  NOTE: You may use an array or linked list for your queue.
 *
 *  HINT: Use a hash table to handle redundancy
 */


/*
 *  5c. Using a stack and while loop, write a function that takes in a graph and
 *      outputs an array of values from vertex A outwards ordered by DEPTH 
 *      FIRST traversal.
 *
 *      Input: Graph
 *      Output: Array
 *
 *  NOTE: Confirm with your answer from problem 4b.
 *
 *  NOTE: You may use an array or linked list for your stack.
 *
 *  HINT: Use a hash table to handle redundancy
 */























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



console.log('breadthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return the elements of a graph in breadth first manner', function(){
  var results = new Graph();
  var toInsert = ['A','B','C','D','E','F','G'];
  toInsert.forEach(function(element){
    results.addVertex(element);
  });
  results.addEdge('A', 'B');
  results.addEdge('A', 'C');
  results.addEdge('D', 'B');
  results.addEdge('D', 'C');
  results.addEdge('E', 'D');
  results.addEdge('D', 'F');
  results.addEdge('G', 'D');
  results.addEdge('G', 'F');

  var example = results.breadthFirst('A');
  var test1 = example[0] === 'A';
  var test2 = example[1] === 'B' || example[2] === 'B';
  var test3 = example[1] === 'C' || example[2] === 'C';
  var test4 = example[3] === 'D';
  var test5 = example[4] === 'E' || example[5] === 'E' || example[6] === 'E';
  var test6 = example[4] === 'F' || example[5] === 'F' || example[6] === 'F';
  var test7 = example[4] === 'G' || example[5] === 'G' || example[6] === 'G';
  return test1 && test2 && test3 && test4 && test5 && test6 && test7; 
});

assert(testCount, 'should return only starting initial node if no edges exist in graph', function(){
  var results = new Graph();
  var toInsert = ['A','B','C','D','E','F','G'];
  toInsert.forEach(function(element){
    results.addVertex(element);
  });
  var example = results.breadthFirst('A');
  return example.length === 1 && example[0] === 'A';
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('depthFirst tests');
var testCount = [0, 0];

assert(testCount, 'able to return the elements of a graph in depth first manner', function(){
  var results = new Graph();
  var toInsert = ['A','B','C','D','E','F','G'];
  toInsert.forEach(function(element){
    results.addVertex(element);
  });
  results.addEdge('A', 'B');
  results.addEdge('A', 'C');
  results.addEdge('D', 'B');
  results.addEdge('D', 'C');
  results.addEdge('E', 'D');
  results.addEdge('D', 'F');
  results.addEdge('G', 'D');
  results.addEdge('G', 'F');

  var example = results.depthFirst('A');
  var test1 = example[0] === 'A';
  var test2 = example[1] === 'B' || example[1] === 'C';
  var test3 = example[2] === 'D';
  var test4 = example[3] === 'B' || example[3] === 'C' || example[3] === 'E' || example[3] === 'F' || example[3] === 'G'; 
  return test1 && test2 && test3 && test4;
});

assert(testCount, 'should return only starting initial node if no edges exist in graph', function(){
  var results = new Graph();
  var toInsert = ['A','B','C','D','E','F','G'];
  toInsert.forEach(function(element){
    results.addVertex(element);
  });
  var example = results.depthFirst('A');
  return example.length === 1 && example[0] === 'A';
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



