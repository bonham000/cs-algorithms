function reduceStr(s) {
	return s.split('').reduce((strs, curr) => {
		if (strs[strs.length - 1] === curr) {
			strs.pop();
			return strs;
		} else {
			strs.push(curr);
			return strs;
		}
	}, []).join('');	
}