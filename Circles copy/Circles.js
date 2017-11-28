let r = 255; let g = 255; let b = 255;
let speed = 3; let diameter = 50;
let x1; let y1;
let x2; let y2;
let x3;
function setup() {
  createCanvas(500,500);
  x1 = width/2;
  y1 = height/2;
  background(random(255),random(255),random(255));
}

function draw() {
    x1 += random(-speed, speed);
    y1 += random(-speed, speed);
    x1 = constrain(x1, 0, width/2);
    y1 = constrain(y1, 0, height/2);

    if (mouseIsPressed) {
      r = random(255);
      g = random(255);
      b = random(255);
    }
    fill (r, g, b, 120);
    ellipse(x1,y1,diameter,diameter);//Top left circle

    x2 = x1 - 500;
    if (x2<0){
      x2 = x2 * -1;
    }
    console.log("x1: " + x1);
    console.log("x2: " + x2);
    ellipse(x2, y1,diameter,diameter);//Top right circle

    y2 = y1 - 500;
    if (y2<0){
      y2 = y2 *-1;
    }
    console.log("y1 " + y1);
    console.log("y2 " + y2);
    ellipse(x1, y2,diameter, diameter);//Bottom left circle
    ellipse(x2, y2,diameter,diameter);//Bottom right circle
}
