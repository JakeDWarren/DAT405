//DAT405
//Colour Coordinates
//This sketches uses input from the mouse to adjust the defined colours within four position rectangles

//Initialization function
function setup() {
  console.log("Initialization: OK") //Print a message to the console
  createCanvas(400,400); //Create the background
}
//Rendering function
function draw() {
  background(0); //Set a background color

  var s1 = map(mouseX,0,width,0,255);
  var s2 = map(mouseY,0,width,0,255);
  var s3 = map(mouseX,0,width,255,0);
  var s4 = map(mouseY,0,width,255,0);

  var colour1 = color(255,0,0,s1);
  var colour2 = color(0,255,0,s2);
  var colour3 = color(0,0,255,s3);
  var colour4 = color(255,0,255,s4);

  fill(colour1);
  rect (0,0,200,200);
  fill(colour2);
  rect (0,200,200,200);
  fill(colour3);
  rect (200,0,200,200);
  fill(colour4);
  rect (200,200,200,200);

  console.log("Rendering...") //Print a message to the console
}
