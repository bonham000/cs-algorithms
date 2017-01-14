function arbitraryBinarySubstring(s) {

	var count = 0;

	var sub = '';
	var flip = 0;
	var zeros = 0;
	var ones = 0;

	for (var i = 0; i < s.length; i++) {
		
		sub = '';
		flip = 0;
		ones = 0;
		zeros = 0;

		for (var j = i; j < s.length; j++) {

			sub += s[j];

			if (s[j] === '0') {
				zeros++
			} else {
				ones++
			}

			if (sub.length % 2 == 0 && zeros === ones && flip === 1) {
				count++;
			}

			if (j < s.length - 1 && s[j + 1] !== s[j]) {
				flip++;
			}

			if (flip > 1) break;

		}
		
	}

	return count;
	
}