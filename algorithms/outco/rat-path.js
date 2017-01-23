function ratPath(maze) {

  var solution = [];

  var xLimit = maze[0].length - 1;
  var yLimit = maze.length - 1;

  function navigate(x, y, path) {

    if (x === xLimit && y === yLimit) {
      solution.push(path);
    } else {

      var pathCopy = [...path];

      if (x < xLimit && maze[x + 1][y] === 0) {
        path.push([x + 1, y]);
        navigate(x + 1, y, path);
      }

      if (y < yLimit && maze[x][y + 1] === 0) {
        pathCopy.push([x, y + 1]);
        navigate(x, y + 1, pathCopy);
      }

    }

  }

  navigate(0, 0, [[0, 0]]);

  return solution;

};

var maze = [[0, 0, 0, 1],
            [0, 1, 0, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0]];

console.log(ratPath(maze));