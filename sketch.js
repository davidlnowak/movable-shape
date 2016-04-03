// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var movableCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
movableCar.drawShape = function () {
	// Wheels
  fill(0);
  ellipse(150, 460, 76, 76);
  ellipse(450, 460, 76, 76);
  fill(180);
  ellipse(150, 460, 70, 70);
  ellipse(450, 460, 70, 70);
  stroke(180);

  noFill();
  stroke(0);
  strokeWeight(3);

  // Upper front-end
  bezier(75,450, 120,360, 200,420, 370,395);
  line(75,450, 105, 460);

  // Door panel
  bezier(290,440, 350,460, 360,380, 470,400);

  // Roof
  bezier(210,398, 280,330, 350,320, 535,418);

  // Bottom
  strokeWeight(5);
  line(188,470, 412,470);

  // Rear
  line(488,470, 530,468);
  line(530,468, 535,418);
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(1200, 600);
	movableCar.x = width;
	movableCar.speed.x = -1;
};

draw = function() {
  background(150); // refresh the background
  movableCar.display(); // display myShape
  movableCar.update(); // and then update it
};
