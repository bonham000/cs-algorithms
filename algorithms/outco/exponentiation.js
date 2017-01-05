function power(a, b){

	if (b === 0) return 1;

	let ans = a;
	let i = 1;

	(function buildAnswer() {
		if (i === b) return;
		ans *= a;
		i++;
		buildAnswer();
	})();

	return ans;

}