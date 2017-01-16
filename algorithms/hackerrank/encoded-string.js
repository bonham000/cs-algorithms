
// string encoding challenge
// numbers are encoded by their position in the alphabet
// # is used to signify two-digit-position characters
// (n) is used to signify repeated characters, where n is the number of repetitions
// given an encoded string, return a 26 element array containing integers represneting the frequency of each letter

// this was a hackerrank jobs challenge I could not get all the tests to pass for:

function fn(s) {
	var freq = [];
	(function(n) {
		while (n < 26) {
			freq.push(0);
			n++;
		}
	})(0);
	var current;
	var dual;
	for (let i = 0; i < s.length; i++) {
		if (i < s.length - 3 && s[i + 1] === '(') {
			current = freq[s[i] - 1];
			current += +s[i + 2];
			freq[s[i] - 1] = current;
			i += 3;
		} else if (i < s.length - 2 && s[i + 2] === '#') {
			
			if (i < s.length - 5 && s[i + 3] === '(') {
				dual = s[i] + s[i + 1] - 1;
				current = freq[+dual];
				current += +s[i + 4];
				freq[+dual] = current;
				i += 5;
			} else {
				dual = s[i] + s[i + 1] - 1;
				current = freq[+dual];
				current++
				freq[+dual] = current;
				i += 2;
			}

		} else {
			current = freq[s[i] - 1];
			current++
			freq[s[i] - 1] = current;
		}
	}
	return freq;
}
