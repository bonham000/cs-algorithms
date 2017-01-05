var fibArray = function(n) {
  let fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length -2]);
  };
  return fib[fib.length - 1];
};

var fib = function(n) {
  let f = 0;
  let s = 1;
  let ans = null;
  let i = 2;
  while (i < n) {
    ans = f + s;
    f = s;
    s = ans;
    i++;
  };
  return ans;
};

var fibFor = function(n) {
  let f = 0;
  let s = 1;
  let ans = null;
  for (let i = 2; i < n; i++) {
    ans = f + s;
    f = s;
    s = ans;
  };
  return ans;
};

var recursiveFib = function(n) {
  function findN(f, s, i) {
    if (i == n - 1) return f + s;
    let next = f + s;
    return findN(s, next, i + 1);
  };
  return findN(0, 1, 2);
};