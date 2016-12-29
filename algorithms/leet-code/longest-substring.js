
// longest substring from a string
// this algorithm runs in linear time with space complexity equal to the input string + the
// size of the longest substring
function longestSubString(s) {
  let len = 0;
  let record = [];
  for (let i = 0; i < s.length; i++) {
    let idx = record.indexOf(s[i]);
    if (idx != -1) record = record.slice(idx + 1);
    record.push(s[i]);
    if (record.length > len) len = record.length;
  };
  return len;
};
// tests
console.assert(longestSubString('abcabcbb') == 3, 'Test 1 failed');
console.assert(longestSubString('bbbbb') == 1, 'Test 2 failed');
console.assert(longestSubString('pwwkew') == 3, 'Test 3 failed');
console.assert(longestSubString('') == 0, 'Test 4 failed');