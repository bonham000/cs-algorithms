
function quickSort(array) {
	
	if (array.length < 2) return array;

	let pivot = array[0];
	let boundary = 1;

	for (let i = 1; i < array.length; i++) {
		if (array[i] <= pivot) {
			[array[boundary], array[i]] = [array[i], array[boundary]];
			boundary++;
		}
	}

	let mid = boundary - 1;

	[array[0], array[mid]] = [array[mid], array[0]];
	
	let left = quickSort(array.slice(0, mid));
	let right = quickSort(array.slice(mid + 1));

	return [...left, array[mid], ...right];

}