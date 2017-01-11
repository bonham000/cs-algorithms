``` javascript
function valleyFlood(array) {
	// this will track the boundaries for one (or more) valleys we encounter
	let bounds = [];

	// variables to track left and right valley bounds
	let leftBound = null;
	let rightBound = null;

	// iterate through the array, establish left/right boundaries for valleys
	for (let i = 0; i < array.length; i++) {
		if (array[i + 1] < array[i] && leftBound === null) {
			leftBound = i;
		}
		if (array[i + 1] > array[i]) {
			rightBound = i;
			if (array[i + 1] >= array[leftBound]) {
				// multiple valleys could exist, so once we have found one valley
				// we will reset the bounds in case we find another
				bounds.push([leftBound, rightBound + 1]);
				leftBound = null;
				rightBound = null;
			}
		}
	}

	// handle edge case for a partial valley on the right edge of array
	if (rightBound != null) bounds.push([leftBound, rightBound + 1]);

	// establish variable to track total volume
	let volume = 0;

	// helper function to calculate volume based on left and right bounds
	// this determines maximum height and then calculates the enclosed volume
	function calculateVolume(left, right) {	
		let height = (array[left] < array[right]) ? array[left] : array[right];
		for (let i = left; i < right; i++) {
			if (array[i] < height) {
				volume += height - array[i];
			}
		}
	}

	// calculate the total volume for each valley we found
	bounds.forEach(bounds => calculateVolume(bounds[0], bounds[1]));

	return volume;
}```