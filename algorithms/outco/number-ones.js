function numberOnes(array) {

	if (array.length === 0) return 0;

	let m = null;
	function findFirst(s, e) {
		m = Math.floor((e - s) / 2) + s;
	
		if (array[m] === 1 && array[m - 1] === 0) {
			return m;
		}

		else if (array[m] === 0) {
			return findFirst(m, e);
		}

		else if (array[m] === 1 && array[m - 1] === 1) {
			return findFirst(s, m);
		};

	}
	let first = findFirst(0, array.length - 1);
	return array.length - first;
}