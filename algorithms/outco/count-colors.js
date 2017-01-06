// count colors... in linear time
let countColors = (array) => {
	let counter = [0,0,0];
	array.forEach(v => {
		switch(v) {
			case 0:
				counter[0] = counter[0] + 1;
				break;
			case 1:
				counter[1] = counter[1] + 1;
				break;
			case 2:
				counter[2] = counter[2] + 1;
				break;
		};
	});
	let result = [];
	let i = 0;
	while (i < 3) {
		if (counter[i] > 0) {
			result.push(i);
			counter[i] = counter[i] - 1;
		} else {
			i++;
		};
	}
	return result;
}