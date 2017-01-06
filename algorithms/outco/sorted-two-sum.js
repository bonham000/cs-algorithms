// linear time
// constant memory
function sortedTwoSum(array, target) {
	if (array.length < 2) return [-1, -1];
	let f = 0;
	let l = array.length - 1;
	let diff = null;
	while (f < l) {
		diff = target - array[f];
		while (array[l] > diff) l--;
		if (array[l] == diff) return [f, l];
		f++;
	}
	return [-1, -1];
}