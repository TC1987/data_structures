// Stacks are great for traversing trees using the DFS method. Following a last in, first out (LIFO) architecture, a stack
// is a critical component of Javascript's runtime and is what allows a JS application to revert back to the previous
// execution context. 

// Using an array.

// function Stack() {
// 	this.data = {};
// 	this.size = 0;
// }

// Stack.prototype = {
// 	push: function(value) {
// 		this.data[++this.size] = value;
// 	},
// 	pop: function() {
// 		if (this.size) {
// 			var deleted = this.data[this.size];
// 			delete this.data[this.size--];
// 			return deleted;
// 		} else {
// 			return 'Stack is empty.';
// 		}
// 	},
// 	peek: function() {
// 		return this.data[this.size];
// 	}
// }

// Using an object.

function Stack() {
	this.data = [];
}

Stack.prototype = {
	push: function(value) {
		this.data.push(value);
	},
	pop: function() {
		if (this.data.length) {
			return this.data.pop();
		} else {
			return 'Stack is empty.';
		}
	},
	peek: function() {
		return this.data[this.data.length - 1];
	}
}