// lattice paths dynamic programming solution
function latticePaths(n) {

  var grid = [];

  for (var i = 0; i < n + 1; i++) {
    var level = [];
    for (var j = 0; j < n + 1; j++) {
      if (i == n || j == n) {
        level.push(1);
      } else {
        level.push(0);
      }
    }
    grid.push(level);
  };

  for (var a = n - 1; a >= 0; a--) {
    for (var b = n - 1; b >= 0; b--) {
      grid[a][b] = grid[a + 1][b] + grid[a][b + 1];
    }
  };

  return grid[0][0];

};