//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(400, 400); //Use this function to define the size of the output window
  strokeWeight(5);
}

function draw() {
  background(0); //Set your background color to black (0)
  //code here...

  for (let i=0; i<100; i++){
    push();
    translate(random(),random());
    noFill();
    stroke(random(255),random(255),random(255));
    rotate(random())
    ellipse(random(width),random(height),random(20,40),random(20,40));
    pop();
}
  noLoop()
}
