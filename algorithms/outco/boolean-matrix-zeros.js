function booleanZeros(matrix) {

  var count = 0;
  var right = matrix[0].length - 1;
  var level = 0;

  while (right > -1 && level < matrix.length) {
    if (matrix[level][right] === 1) {
      right--;
    } else {
      count += (right + 1);
      level++;
    }
  };

  return count;

};

function booleanZerosReduce(matrix) {
  var edge = matrix[0].length - 1;
  return matrix.reduce((zeros, row) => {
    while (row[edge] === 1) edge--;
    return (zeros + edge + 1);
  }, 0);
};

var matrix = [[0, 0, 0, 1],
              [0, 0, 0, 1],
              [0, 0, 1, 1],
              [0, 0, 1, 1],
              [0, 1, 1, 1],
              [1, 1, 1, 1]]; // -> 11

console.log(booleanZeros(matrix));
console.log(booleanZerosReduce(matrix));


