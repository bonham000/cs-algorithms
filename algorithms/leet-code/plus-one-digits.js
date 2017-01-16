var plusOne = function(digits) {

  var curr = 1;

  while(curr <= digits.length) {

  	if (digits[digits.length - curr] == 9) {
  		digits[digits.length - curr] = 0;
  		curr++;
  	} else {
			digits[digits.length - curr] = digits[digits.length - curr] + 1;
			return digits;
  	}
  }

  digits[digits.length - curr] = 0;
  return [1].concat(digits);

};