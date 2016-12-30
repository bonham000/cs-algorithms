// Given a string of just the following values, '()[]{}', determine
// if all of the characters close in the proper order
// ([]{}) should return true & ([)], (((, and ( should return false
// In the worst case this algorithm runs in linear time and has a
// maximum requirement of n auxiliary space in the worst case.
var isValid = function(s) {
  if (s.length % 2 != 0) return false;
  let O = [];
  for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (char == '(' || char == '[' || char == '{' ) {
          O.push(char);
      } else {
          let cp = O[O.length - 1];
          if (cp == '(' && char != ')' || cp == '[' && char != ']' || cp == '{' && char != '}') {
            return false;
          } else {
            O.pop();
          };
      };
  };
  return (O.length > 0) ? false : true;
};