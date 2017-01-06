// O(2n) memory usage
// O(1) lookup for all operations
function MinStack() {
	this.stack = [];
	this.minimum = [];
	this.push = function(value) {
		this.stack.push(value);
		if (this.minimum.length == 0) {
			this.minimum.push(value);
		} else {
			let min = this.minimum[this.minimum.length - 1];
			if (value <= min) {
				this.minimum.push(value);
			} else {
				this.minimum.push(min);
			}
		}
	};
	this.pop = function() {
		this.minimum.pop();
		return this.stack.pop();
	};
	this.min = function() {
		return this.minimum.pop();
	};
	this.peek = function() {
		return this.stack[this.stack.length - 1];
	};
};