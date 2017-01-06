function QueueClass() {
	this.inbox = [];
	this.outbox = [];
	this.enqueue = function(int) {
		this.inbox.push(int);
	};
	this.dequeue = function() {
		if (this.outbox.length === 0) {
			while (this.inbox.length > 0) {
				this.outbox.push(this.inbox.pop());
			};
		};
		return this.outbox.pop();
	};
};