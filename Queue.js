// Queues are often used for BFS traversals and follow a first in, first out (FIFO) structure. With a stack, you are guaranteed 
// to remove the oldest element first before any of the newer elements.

// Queues play a critical role for asynchronous function calls. When an asychronous call is finished, its callback is
// placed into a queue where it is pushed onto the call stack by the the event loop. Note that this only occurs when the
// call stack is empty.

// // Using an object.

// function Queue() {
// 	this.data = {};
// 	this.front = 0;
// 	this.rear = 0;
// }

// Queue.prototype = {
// 	enqueue: function(value) {
// 		this.data[++this.rear] = value;
// 	},
// 	dequeue: function() {
// 		if (this.rear > this.front) {
// 			var removed = this.data[++this.front];
// 			delete this.data[this.front];
// 			return removed;
// 		} else {
// 			return 'Queue is empty.';
// 		}

// 	},
// 	first: function() {
// 		if (this.rear > this.front) {
// 			return this.data[this.front + 1];
// 		} else {
// 			return 'Queue is empty.';
// 		}
// 	},
// 	last: function() {
// 		if (this.rear > this.front) {
// 			return this.data[this.rear];
// 		} else {
// 			return 'Queue is empty.';
// 		}
// 	},
// 	length: function() {
// 		return this.rear - this.front;
// 	}
// }

// Using an array.

function Queue() {
	this.data = [];
}

Queue.prototype = {
	enqueue: function(value) {
		this.data.push(value);
	},
	dequeue: function() {
		return this.data.shift();
	},
	first: function() {
		if (this.data.length) {
			return this.data[0];
		} else {
			return 'Queue is empty.';
		}
	},
	last: function() {
		if (this.data.length) {
			return this.data[this.data.length - 1];
		} else {
			return 'Queue is empty.';
		}
	},
	length: function() {
		return this.data.length;
	}
}