//Data Visualisation
function setup() {
    createCanvas(700, 700);//Creating the draw area
    textAlign(CENTER, CENTER);//Sets any text drawn to be centered on the given x,y coordinates
    rectMode(CENTER);//Sets the drawing point to the center of the shape (is created around the set coordinates)
    angleMode(DEGREES);
}

function draw() {
    background(0);//Setting background colour to black
    //drawTitleText()
    var radius = 100;
    push();
    translate(width / 2, height / 2);

    for (var i = 0; i < 15; i++) {
        rotate(i);
        var num = new Num(1, 0 + radius, 0, 90, 255);
        num.render();
    }

    pop();
}

function Num(msg,x,y,rot,clr) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.msg = msg;
    this.color = clr;

    this.render = function() {
      push();
      fill(this.color);
      translate(this.x, this.y);
      rotate(this.rot);
      text(this.msg, 0, 0);
      pop();
    }
}

function drawTitleText() {
    push();//opening new loacl state for settings (settings in this area remain in this are e.g. stroke/fill etc.)
    translate(width/2,height/2);//moves the coordinate system to centre of the canvas (0,0 is now the center)

    var scaleFactor = 0.5;//Declaring vatiable 'scaleFactor' has a value of 0.5
    var maxLimit = 200;//Declaring variable 'maxLimit' has a value of 200
    if (frameCount < maxLimit) { //If framcount is less than the limit then do this
      var currentScale = map(frameCount, 0, maxLimit, 0, scaleFactor);//Declaring new variable 'currentScale' is a new value (from framecount (between 0 and 200)) and will be replotted between 0 and 1.5('scaleFactor'))
      scale(1.5 + currentScale);//Sets scale to 1.5 plus variable result 'currentScale'
    } else {
      scale(1.5 + scaleFactor);//Else sets scale to 1.5 + 0.5
    }

    strokeWeight(2);//Thick =ness of border set to 2
    stroke(255);//Stroke colour is white
    fill(0, 0);//Fill is black but transparent
    rect(0,0,210,30);//Creates a small rectagnle around the center of the canvas to encompass the text

    fill(255);//Text will be white
    noStroke();//Text will hve no outline
    textFont('Arial');//Sets text font to arial
    text('CODING FOR VISUAL LEARNERS', 0, 0);//Writes text in the centre of the screen
    pop();//Closing new state for settings
}
