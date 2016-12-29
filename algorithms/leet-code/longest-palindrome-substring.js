// performance helper function:
const timeFn = (fn, args) => {
  let timeStart = performance.now();
  let result = fn(args);
  let timeEnd = performance.now();
  console.log(`${fn.prototype.constructor.name} took ${(timeEnd - timeStart).toFixed(6) * 1000} microseconds to run and returned:`);
  console.log(result);
};
// naive approach, multiple iterations on the order of n
function longestPalindrome1(s) {
  let longest = s[0];
  let checkPalindrome = function(s) {
    while (s.length > 1) {
      if (s[0] != s[s.length - 1]) return false;
      s = s.substr(1, s.length - 2);
    }
    return true;
  };
  for (let a = 0; a < s.length; a++) {
    if (longest.length > s.length - a) break;
    let substr = s[a];
    if (longest == null) longest = substr;
    for (let b = a + 1; b < s.length; b++) {
      substr += s[b];
      if (substr.length > longest.length) {
        if (checkPalindrome(substr)) longest = substr;
      }
    }
  }
  return longest;
};
// better approach, quadratic time
// this approach is approximately 150x faster than the above
function longestPalindrome2(s) {
  if (s.length < 2) return s;
  let longest = s[0];
  function extendPalindrome(b, a) {
    if (s[b] != s[a]) return;
    while (b > 0 && a <= s.length) {
      if (s[b - 1] != s[a + 1]) break;
      b--; a++;
    };
    let str = s.slice(b, a + 1);
    if (str.length > longest.length) longest = str;
  };
  for (let i = 0; i < s.length; i++) {
    extendPalindrome(i - 1, i + 1);
    extendPalindrome(i, i + 1);
  };
  return longest;
};
// performance:
timeFn(longestPalindrome1, "lphbehiapswjudnbcossedgioawodnwdruaaxhbkwrxyzaxygmnjgwysafuqbmtzwdkihbwkrjefrsgjbrycembzzlwhxneiijgzidhngbmxwkhphoctpilgooitqbpjxhwrekiqupmlcvawaiposqttsdgzcsjqrmlgyvkkipfigttahljdhtksrozehkzgshekeaxezrswvtinyouomqybqsrtegwwqhqivgnyehpzrhgzckpnnpvajqevbzeksvbezoqygjtdouecnhpjibmsgmcqcgxwzlzztdneahixxhwwuehfsiqghgeunpxgvavqbqrelnvhnnyqnjqfysfltclzeoaletjfzskzvcdwhlbmwbdkxnyqappjzwlowslwcbbmcxoiqkjaqqwvkybimebapkorhfdzntodhpbhgmsspgkbetmgkqlolsltpulgsmyapgjeswazvhxedqsypejwuzlvegtusjcsoenrcmypexkjxyduohlvkhwbrtzjnarusbouwamazzejhnetfqbidalfomecehfmzqkhndpkxinzkpxvhwargbwvaeqbzdhxzmmeeozxxtzpylohvdwoqocvutcelgdsnmubyeeeufdaoznxpvdiwnkjliqtgcmvhilndcdelpnilszzerdcuokyhcxjuedjielvngarsgxkemvhlzuprywlypxeezaxoqfges");
timeFn(longestPalindrome2, "lphbehiapswjudnbcossedgioawodnwdruaaxhbkwrxyzaxygmnjgwysafuqbmtzwdkihbwkrjefrsgjbrycembzzlwhxneiijgzidhngbmxwkhphoctpilgooitqbpjxhwrekiqupmlcvawaiposqttsdgzcsjqrmlgyvkkipfigttahljdhtksrozehkzgshekeaxezrswvtinyouomqybqsrtegwwqhqivgnyehpzrhgzckpnnpvajqevbzeksvbezoqygjtdouecnhpjibmsgmcqcgxwzlzztdneahixxhwwuehfsiqghgeunpxgvavqbqrelnvhnnyqnjqfysfltclzeoaletjfzskzvcdwhlbmwbdkxnyqappjzwlowslwcbbmcxoiqkjaqqwvkybimebapkorhfdzntodhpbhgmsspgkbetmgkqlolsltpulgsmyapgjeswazvhxedqsypejwuzlvegtusjcsoenrcmypexkjxyduohlvkhwbrtzjnarusbouwamazzejhnetfqbidalfomecehfmzqkhndpkxinzkpxvhwargbwvaeqbzdhxzmmeeozxxtzpylohvdwoqocvutcelgdsnmubyeeeufdaoznxpvdiwnkjliqtgcmvhilndcdelpnilszzerdcuokyhcxjuedjielvngarsgxkemvhlzuprywlypxeezaxoqfges");
// tests:
console.assert(longestPalindrome2('babad') == 'bab', 'Test 1 failed');
console.assert(longestPalindrome2('cbbd') == 'bb', 'Test 2 failed');
console.assert(longestPalindrome2('') == '', 'Test 3 failed');
console.assert(longestPalindrome2('lphbehiapswjudnbcossedgioawodnwdruaaxhbkwrxyzaxygmnjgwysafuqbmtzwdkihbwkrjefrsgjbrycembzzlwhxneiijgzidhngbmxwkhphoctpilgooitqbpjxhwrekiqupmlcvawaiposqttsdgzcsjqrmlgyvkkipfigttahljdhtksrozehkzgshekeaxezrswvtinyouomqybqsrtegwwqhqivgnyehpzrhgzckpnnpvajqevbzeksvbezoqygjtdouecnhpjibmsgmcqcgxwzlzztdneahixxhwwuehfsiqghgeunpxgvavqbqrelnvhnnyqnjqfysfltclzeoaletjfzskzvcdwhlbmwbdkxnyqappjzwlowslwcbbmcxoiqkjaqqwvkybimebapkorhfdzntodhpbhgmsspgkbetmgkqlolsltpulgsmyapgjeswazvhxedqsypejwuzlvegtusjcsoenrcmypexkjxyduohlvkhwbrtzjnarusbouwamazzejhnetfqbidalfomecehfmzqkhndpkxinzkpxvhwargbwvaeqbzdhxzmmeeozxxtzpylohvdwoqocvutcelgdsnmubyeeeufdaoznxpvdiwnkjliqtgcmvhilndcdelpnilszzerdcuokyhcxjuedjielvngarsgxkemvhlzuprywlypxeezaxoqfges') == 'pnnp', 'Test 4 failed');

