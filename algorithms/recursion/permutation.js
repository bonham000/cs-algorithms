// permutation slow
function permutation(str) {
  var store = [];
  function permute(s, p = '') {
    if (p.length === str.length) {
      store.push(p);
    } else {
      for (var i in s) {
        permute((s.slice(0, i) + s.slice(+i + 1)), p.concat(s[i]));
      }
    }
  }
  permute(str);
  return store;
}