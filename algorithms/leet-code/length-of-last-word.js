// length of last word in string
var lengthOfLastWord = function(s) {
   s = s.split(' ');
   while (s.length > 0) {
       let t = s.pop();
       if (t.length > 0) return t.length;
   }
   return 0;
};