
// determine if string has only unique charactesrs, extra DS allowed:
function uniq1(str) {
	let chars = new Set();
	for (let i = 0; i < str.length; i++){
		if (chars.has(str[i])) {
			return false;
		} else {
			chars.add(str[i]);
		}
	}
	return true;
};

// determine if string has only unique charactesrs, no extra DS:
function uniq2(str) {
	for (let a = 0; a < str.length; a++) {
		for (let b = a + 1; b < str.length; b++) {
			if (str[a] === str[b]) return false;
		}
	}
	return true;
};

// remove duplicates from a string
function rmDup1(str) {
	for (let a = 0; a < str.length; a++) {
		for (let b = a + 1; b < str.length; b++) {
			if (str[a] === str[b]) {
				str = str.slice(0, b) + str.slice(b + 1)
				b--;
			}
		}
	}
	return str;
};
// using reduce
let rmDup2 = (str) => {
	let R = str.split('').reduce((fin, n) => {
		return (fin.indexOf(n) ==	 -1) ? fin.concat(n) : fin;
	}, []);
	return R.join('');
};
// tests:
console.assert(rmDup('abcdefghijk') == 'abcdefghijk', 'Passes for a string with unique characters');
console.assert(rmDup('tthhiisshhaassdduupppppp') == 'thisadup', 'Removes duplicates');

// replace spaces with %20
let repl = (str) => str.replace(/\s/g, '%20');
console.assert(repl('nospaceshere') == 'nospaceshere', 'Input with no spaces should not be changed.');
console.assert(repl('some spaces here') == 'some%20spaces%20here', 'Input with spaces is returned with the spaces replaced with %20.');

// determine if two strings are anagrams or not
function isAnagram1(A, B) {
	A = A.toLowerCase(); B = B.toLowerCase();
	let cp = A.split('');
	for (let i = 0; i < B.length; i++) {
		let idx = cp.indexOf(B[i]);
		if (idx == -1) return false;
		cp.splice(idx, 1);
	}
	if (cp.length == 0) return true;
	return false;
};
function isAnagram2(str1, str2) {
	let fn = (S) => {
		return S.split('').reduce((accum, letter) => {
			return (letter in accum) ? Object.assign({}, accum, accum[letter] = (accum[letter] + 1)) : Object.assign({}, accum, accum[letter] = 1);
		}, {});
	};
	let s1 = fn(str1);
	let s2 = fn(str2);
	if (Object.keys(s1).length !== Object.keys(s2).length) return false;
	for (let letter in s1) {
		if (s2.hasOwnProperty(letter)) {
			s1[letter] = s2[letter];
		} else {
			return false;
		};
	};
	return true;
};
// tests:
console.assert(isAnagram('anagram', 'gramana') == true, 'isAnagram returns true for anagrams.');
console.assert(isAnagram('anagrams', 'gramana') == false, 'isAnagram returns false for anagrams.');













