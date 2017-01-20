// given an array of positive/negative integers, find the maximum sum
// of consecutive integer values (a sub-array) in linear time:
function maxSum(array) {

	var negatives = 0;
	var sum = 0;

	for (var i = 0; i < array.length; i++) {
		if (negatives < 0 && array[i] > 0) {
			var priorSum = (negatives + array[i]);
			if (array[i] > (priorSum + sum)) {
				sum = array[i];
				negatives = 0;
			} else if ((priorSum + sum) > sum) {
				sum += priorSum;
				negatives = 0;
			}
		} else if (array[i] < 0) {
			if (sum === 0) continue;
			negatives += array[i];
		} else if (array[i] >= 0) {
			sum += array[i];
		}
	}

	return sum;

};