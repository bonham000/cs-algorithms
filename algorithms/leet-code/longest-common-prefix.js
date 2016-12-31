// find the longest prefix of an array of strings
// in the worst case this has time complexity O(n * m) where
// n is the number of strings and m is the length
// this has auxiliary space complexity equal to the length
// of the longest common prefix string
var longestCommonPrefix = function(strs) {
  if (strs == '' || strs[0].length == 0) return '';
  if (strs.length == 1) return strs[0];
  let pre = '';
  let dep = 0;
  let cp = null;
  for (let a = 1; a < strs.length; a++) {
  	cp = strs[0][dep];
  	if (a == 1) pre += strs[a][dep];
  	if (strs[a][dep] != cp) return pre.slice(0, dep);
  	if (a == strs.length - 1) {
  		dep++;
  		if (dep == strs[0].length) return pre;
  		a = 0;
  	}
  }
};