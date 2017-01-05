function twoSum(array, target) {
	let cache = {};
	let val = null;
	for (let i = 0; i < array.length; i++) {
		val = array[i];
		if ( (target - val) in cache) {
			return [cache[target - val], i];
		}
		cache[val] = i;
	}
	return [-1, -1];
}