
"use strict";

var plusOne = function(digits) {

  var curr = 1;

  while(curr < digits.length) {

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

var num = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
var nines = [9,9,9];
console.log(plusOne([0]));