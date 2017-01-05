function merge1(arr1, arr2){

	let merged = [];

	while (arr1.length > 0 || arr2.length > 0) {
		if (arr1[0] < arr2[0]) {
			merged.push(arr1.shift())
		} else if (arr2[0] < arr1[0]) {
			merged.push(arr2.shift())
		}
		if (arr1.length == 0) {
			merged = merged.concat(arr2);
			break;
		}
		if (arr2.length == 0) {
			merged = merged.concat(arr1);
			break;
		}
	};

	return merged;

}

function merge2(arr1, arr2) {
	let merged = [];

	(function buildMerged() {
		if (arr1[0] < arr2[0]) {
			merged.push(arr1.shift());
		} else if (arr2[0] < arr1[0]) {
			merged.push(arr2.shift());
		}

		if (arr1.length == 0) {
			Array.prototype.push.apply(merged, arr2);
			return;
		}
		if (arr2.length == 0) {
			Array.prototype.push.apply(merged, arr1);
			return;
		}

		buildMerged();

	})();

	return merged;
}

function merge(arr1, arr2) {
	let merged = [];
	let p1 = 0;
	let p2 = 0;

	(function buildMerged() {
		if (arr1[p1] < arr2[p2]) {
			merged.push(arr1[p1]);
			p1 += 1;
		} else if (arr2[p2] < arr1[p1]) {
			merged.push(arr2[p2]);
			p2 += 1;
		}
		if (p1 === arr1.length) {
			Array.prototype.push.apply(merged, arr2.slice(p2));
			return;
		}
		if (p2 === arr2.length) {
			Array.prototype.push.apply(merged, arr1.slice(p1));
			return;
		}
		buildMerged();
	})();
	
	return merged;
}