var setZeros = function(M) {
    let set = {
    	rows: [],
    	columns: []
    };
    for (let a = 0; a < M.length; a++) {
    	for (let b = 0; b < M[a].length; b++) {
    		if (M[a][b] === 0) {
    			set.rows.push(a);
    			set.columns.push(b);
    		}
    	}
    }
    for (let a = 0; a < M.length; a++) {
    	for (let b = 0; b < M[a].length; b++) {
    		if (set.rows.indexOf(a) !== -1 || set.columns.indexOf(b) !== -1) {
    			M[a][b] = 0;
    		}
    	}
    }
    return M;
};