var movableShape = {
	// x and y indicate the current position of the shape
  // x and y can be offset in setup() to move the shape wherever you'd like it to go
	x: 0,
	y: 0,
	// origin is used to store the original position of the shape
	origin: { x: 0, y: 0},
	// delta.x and delta.y indicate how much to move() the shape
	speed: { x: 0, y: 0 },

	/*
		Put your shape(s) in drawShape()
		You can simply override what is here in your sketch.js:
			myShape.drawShape = function () {
				// your code goes here
			};
		It is blank here so the code runs without any revision.
	*/
	drawShape: function () {},

	// A common pattern in Processing is to give each object its own display() and update() functions, each of which are called in draw().

	// The display function uses translate() to move the shape, en masse, to the current x and y.
	display: function () {
		push();
		translate(this.x - this.origin.x, this.y - this.origin.y); // this is where the magic happens
		this.drawShape(); // this is where your drawShape() gets called
		pop();
	},

	// update() groups together all the things that happen each time draw() is called
	// If you wanted to build some acceleration in here, you might add a line or two to modify the speed
	update: function () {
		this.speed.x *= 1.04;
		this.move();
	},

	// Applies speed.x and speed.y to the shape
	move: function () {
		this.x += this.speed.x;
		this.y += this.speed.y;
	}

};
