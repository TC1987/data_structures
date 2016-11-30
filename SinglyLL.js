function Node(value) {
	this.value = value;
	this.next;
}

function Singly() {
	this.head = null;
}

Singly.prototype = {
	add: function(value) {
		var node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			var current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}
	},
	remove: function(value) {
		// If the value exists, removes the first instance starting from the beginning of the list.

		if (!this.head) {
			return 'List is empty. No node to remove.';
		} else if (this.head.value === value) {
			this.head = this.head.next;
		} else {
			var current = this.head,
				prev;

			while (current && current.value !== value) {
				prev = current;
				current = current.next;
			}

			if (current) {
				prev.next = current.next;
			} else {
				return 'Value not found.';
			}
		}
	},
	insertByPos: function(pos, value) {
		var node = new Node(value);

		if (pos <= 0 || typeof(pos) !== 'number') {
			throw new Error('Position must be greater than 0 and must be an integer.');
		}

		if (pos === 1) {
			node.next = this.head;
			this.head = node;
		} else {
			var current = this.head,
				count = 1,
				prev;

			while (count < pos && current) {
				prev = current;
				current = current.next;
				count++;
			}

			if (current) {
				prev.next = node;
				node.next = current;
			} else {
				throw new Error('Position cannot exceed length of list.');
			}
		}
	},
	removeByPos: function(pos) {
		if (!this.head) {
			throw new Error('List is empty.');
		} else {
			if (pos === 1) {
				this.head = this.head.next;
			} else {
				var current = this.head,
					count = 1,
					prev;

				while (count < pos && current) {
					prev = current;
					current = current.next;
					count++;
				}

				if (current) {
					prev.next = current.next;
				} else {
					throw new Error('Position cannot exceed length of list.');
				}
			}
		}
	},
	display: function() {
		var current = this.head;
		while (current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

var mySingly = new Singly();
mySingly.add(5);
mySingly.add(3);
mySingly.add(4);
mySingly.add(6);
// mySingly.remove(4);
// mySingly.insertByPos(1, 0);
mySingly.removeByPos(1);
mySingly.display();