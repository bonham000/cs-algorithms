function matrixSpiral(M) {
  
  var top = 0;
  var right = M[0].length - 1;
  var bottom = M.length - 1;
  var left = 0;
  var spiral = [];

  while (top < (bottom + 1) && left < (right + 1)) {

    for (var a = left; a <= right; a++) spiral.push(M[top][a]);
    top++;

    for (var b = top; b <= bottom; b++) spiral.push(M[b][right]);
    right--;

    for (var c = right; c >= left; c--) spiral.push(M[bottom][c]);
    bottom--;

    for (var d = bottom; d >= top; d--) spiral.push(M[d][left]);
    left++;

  };

  return spiral;

};

var input = [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]];

var input2 = [[1,  2,  3,  4,  5,  6,  7 ],
              [8,  9,  10, 11, 12, 13, 14],
              [15, 16, 17, 18, 19, 20, 21],
              [22, 23, 24, 25, 26, 27, 28],
              [29, 30, 31, 32, 33, 34, 35],
              [36, 37, 38, 39, 40, 41, 42],
              [43, 44, 45, 46, 47, 48, 49]];

var answer2 = [1,2,3,4,5,6,7,14,21,28,35,42,49,48,47,46,45,44,43,36,29,22,15,8,9,10,
               11,12,13,20,27,34,41,40,39,38,37,30,23,16,17,18,19,26,33,32,31,24,25];

var result2 = matrixSpiral(input2);

console.log(answer2.length);
console.log(result2.length);
console.log(result2);

function arrayCheck(array1, array2) {
  var check = true;
  return array1.reduce((accum, curr, idx) => {
    if (array2[idx] !== curr) check = false;
    return check;
  });
};

console.log(arrayCheck(answer2, result2));

