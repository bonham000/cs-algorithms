// given a matix representing the game of life board, modify it and return the next state in place:

function gameOfLife(board) {
	let nextState = [];
	for (let a = 0; a < board.length; a++) {
		let row = [];
		for (let b = 0; b < board[a].length; b++) {
			let friends = 0;

			if (b > 0 && board[a][b - 1] == 1) friends++;
			if (b < board[a].length && board[a][b + 1] == 1) friends++;

			if (a > 0 && b > 0 && board[a - 1][b - 1] == 1) friends++;
			if (a > 0 && board[a - 1][b] == 1) friends++;
			if (a > 0 && b < board[a].length && board[a - 1][b + 1] == 1) friends++;

			if (a < board.length - 1 && b > 0 && board[a + 1][b - 1] == 1) friends++;
			if (a < board.length - 1 && board[a + 1][b] == 1) friends++;
			if (a < board.length - 1 && b < board[a].length && board[a + 1][b + 1] == 1) friends++

			if (board[a][b] == 1 && (friends < 2 || friends > 3)) {
				row.push(0);
			} else if (board[a][b] == 1 && (friends == 2 || friends == 3)) {
				row.push(1);
			} else if (friends == 3 && board[a][b] == 0) {
				row.push(1);
			} else {
				row.push(0);
			}

		}
		nextState.push(row);
	}
	for (let a = 0; a < board.length; a++) {
		for (let b = 0; b < board[a].length; b++) {
			board[a][b] = nextState[a][b];
		}
	}
}