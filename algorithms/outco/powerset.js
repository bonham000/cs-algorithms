
var permutations = function(str) {
  
  let powerSet = {};

  function addToSet(s) {
    let conversion = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 1) conversion += str[i];
      if (i == s.length - 1) powerSet[conversion] = true;
    };
  };

  (function generateBinary(b) {
    if (b.length == str.length) {
      addToSet(b);
      return;
    } else {
      generateBinary(b + '0');
      generateBinary(b + '1');
    };
  })('');

  return Object.keys(powerSet);

};

// more concise recursive approach
// time complexity: O(2^n)
// auxiliary space complexity: O(2^n) (worst case)
function powerSet(string) {
  let powerSet = {};
  function buildSet(s = '', i = 0) {
    if (i == string.length) {
      powerSet[s] = true;
    } else {
      buildSet(s + string[i], i + 1);
      buildSet(s, i + 1); 
    };
  };
  buildSet();
  return Object.keys(powerSet);
};