// find a needle substring in a haystack, or
// return -1 if it is not present
var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (haystack == '' && needle == '') return 0;
  if (needle == '') return 0;
  let cp = 0;
  let flag = null;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.length - i < needle.length && cp == 0) return - 1;
    if (haystack[i] == needle[cp]) {
      if (cp == needle.length - 1) return (i - cp);
      if (haystack[i] == needle[0] && cp !== 0) flag = i;
      cp++;
    } else if (haystack[i] != needle[cp] && flag != null) {
      i = flag - 1;
      flag = null;
      cp = 0;
    } else if (haystack[i] == needle[0] && cp !== 0) {
      cp = 1;
    };
  };
  return -1;
};
// another version
var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (haystack == '' && needle == '') return 0;
  if (needle == '') return 0;
  for (let a = 0; a < haystack.length; a++) {
    if (haystack.length - a < needle.length) return - 1;
    if (haystack[a] == needle[0]) {
      for (let b = 0; b < needle.length; b++) {
        if (haystack[a + b] != needle[b]) {
          break;
        } else if (b == needle.length - 1) {
          return a;
        };
      };
    };
  };
  return -1;
};
