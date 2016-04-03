// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var movablePlane = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
movablePlane.drawShape = function () {
	// Left Wing
  fill(255);
  triangle(80,210, 500,100, 190,255);

  // Left Fold
  fill(200);
  triangle(190,255, 500,100, 210,310);

  // Right Wing
  fill(255);
  triangle(245,270, 500,100, 360,340);

  // Right Fold
  fill(140);
  triangle(245,270, 210,310, 270,285);

  // Trail Lines
  strokeWeight(5);
  line(200,330, 90,420);
  line(280,310, 187,400);
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(1200, 800);

	movablePlane.y = height-400;
	movablePlane.x = -100;
	movablePlane.speed.x = .7;
	movablePlane.speed.y = -.9;
};

draw = function() {
  background(80); // refresh the background
  movablePlane.display(); // display myShape
  movablePlane.update(); // and then update it
};
