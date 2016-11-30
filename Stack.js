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

// function Stack() {
// 	this.data = [];
// }

// Stack.prototype = {
// 	push: function(value) {
// 		this.data.push(value);
// 	},
// 	pop: function() {
// 		if (this.data.length) {
// 			return this.data.pop();
// 		} else {
// 			return 'Stack is empty.';
// 		}
// 	},
// 	peek: function() {
// 		return this.data[this.data.length - 1];
// 	}
// }

// How would you design a stack which in addition to push and pop, also has a function min which return the min elem? Push, pop, min should operate in O(1) time.

function Stack() {
	this.data = [];
	this.min = [];
}

Stack.prototype = {
	push: function(value) {
		if (this.min.length === 0) {
			this.min.push(value);
		} else {
			if (this.min[this.min.length - 1] >= value) {
				this.min.push(value);
			}
		}

		this.data.push(value);
	},
	pop: function() {
		if (this.data.length) {
			if (this.data[this.data.length - 1] === this.min[this.min.length - 1]) {
				this.min.pop();
			}

			return this.data.pop();
		} else {
			return 'Stack is empty.';
		}
	},
	minValue: function() {
		if (this.min.length) {
			return this.min[this.min.length - 1];
		} else {
			return 'Stack is empty.';
		}
	}
}

var newStack = new Stack();
newStack.push(5);
newStack.push(3);
newStack.push(7);
newStack.push(2);
newStack.push(4);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.minValue());
console.log(newStack);