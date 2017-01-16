// given a matrix of arrays representing ranges as input,
// output the count for each range of numbers in the range
// that do not contain duplicate values.

// this was a hackerrank jobs challenge, I couldn't get all the tests to pass:

function nums(input) {

	function count(a, b) {
		var count = 0;
		a--;
		while (a < b) {
			a++;
			var num = a;
			num = num.toString().split('');
			var reduced = num.reduce((total, elem) => {
				if (total.indexOf(elem) === -1) {
					total.push(elem);
					return total;
				} else {
					return;
				}
			}, []);
			if (reduced) {
				count++;
			}
		}
		return count;
	}

	for (let params of input) {
		console.log(count(params[0], params[1]));
	}
}

let A = [[1,20], [10,19]] // should return 19, 10
console.log(nums(A));