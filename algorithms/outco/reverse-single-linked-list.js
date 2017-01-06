let reverseList = function(list) {
	let node = list;
	let prev = null;
	let next = node.next;
	while (node != null) {
		next = node.next;
		node.next = prev;
		prev = node;
		node = next;
	};
	return prev;
};