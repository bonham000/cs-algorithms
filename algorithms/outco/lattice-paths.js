function latticePaths(n) {
  if (n == 0) return 1;
  var paths = 0;
  function search(position) {
    let fork = Object.assign({}, position);
    function progress(path) {
      (path.right == n && path.down == n) ? paths++ : search(path);
    }
    if (position.right < n) {
      position.right++;
      progress(position);
    }
    if (fork.down < n) {
      fork.down++;
      progress(fork);
    }
  }
  search({ right: 0, down: 0 });
  return paths;
}