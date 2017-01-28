
"use strict";

/* given a 2D grid of letters and a word, return true if the word can be traced out
	 by adjacent letters in the grid (without repeating grid spaces), or false otherwise */

var exist = function(board, word) {
  
  var found = false;
	var maxY = board.length - 1;
	var maxX = board[0].length - 1;

	// recursively explore paths from starting space outward
  function explore(x, y, used, compare) {

  	var target = word[compare];
  	var next = compare + 1;

  	var left = (x > 0) ? board[y][x - 1] : undefined;
  	var right = (x < maxX) ? board[y][x + 1] : undefined;
  	var up = (y > 0) ? board[y - 1][x] : undefined;
  	var down = (y < maxY) ? board[y + 1][x] : undefined;

  	var leftID = y.toString() + (x - 1).toString();
  	var rightID = y.toString() + (x + 1).toString();
  	var upID = (y - 1).toString() + x.toString();
  	var downID = (y + 1).toString() + x.toString();

  	if (left && !used[leftID]) {
  		if (left === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				explore(x - 1, y, Object.assign({ [leftID]: true }, used), next);
  			}
  		}
  	}
  	if (right && !used[rightID]) {
  		if (right === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				explore(x + 1, y, Object.assign({ [rightID]: true }, used), next);
  			}
  		}
  	}
  	if (up && !used[upID]) {
  		if (up === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				explore(x, y - 1, Object.assign({ [upID]: true }, used), next);
  			}
  		}
  	}
  	if (down && !used[downID]) {
  		if (down === target) {
  			if (next === word.length) {
  				found = true;
  				return;
  			} else {
  				explore(x, y + 1, Object.assign({ [downID]: true }, used), next);
  			}
  		}
  	}
  }
  
  // iterate through grid and explore any cells that match the first letter of the word
  for (var i = 0; i <= maxY; i++) {
    for (var j = 0; j <= maxX; j++) {
      if (board[i][j] === word[0]) {
      	if (word.length === 1) return true;
      	explore(j, i, {}, 1);
      	if (found) return found;
      }
    }
  }

  return false;

};

var board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

console.log(exist(board, 'ESEECCBFDASA'));
