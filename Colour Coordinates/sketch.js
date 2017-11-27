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

fill(100,90,210);
rect (0,0,200,200);
fill(0,200,150);
rect (0,200,200,200);
fill(250,0,255);
rect (200,0,200,200);
fill(200,25,0);
rect (200,200,200,200);

if(mouseX<200 && mouseY<200){
  fill(0,0,0);
  rect(0,0,200,200);
}

if((mouseX>200 && mouseX<400) && mouseY<200){
  fill(0,0,0);
  rect(200,0,200,200);
}
if((mouseY>200 && mouseY<400) && mouseX<200){
  fill(0,0,0);
  rect(0,200,200,200);
}
if((mouseX>200 && mouseX<400) && (mouseY>200 && mouseY<400)){
  fill(0,0,0);
  rect(200,200,200,200);
}
  console.log("Rendering...") //Print a message to the console
}
