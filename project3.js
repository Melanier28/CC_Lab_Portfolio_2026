function setup() {

  // create the canvas

  canvas = createCanvas(600, 600);

  // attach the canvas to the div in your HTML

  canvas.parent("sketch-container");


  rectMode(CENTER);
  angleMode(DEGREES);
}


function draw() {
  background(0, 184, 240);
  
  if (hour() >= 18 || hour() < 6) {
  background(20, 20, 60);
}

  let s = second();
  let rotationAngle = map(s, 0, 60, 0, 360);

  push();
  stroke('GREEN');
  strokeWeight(30);
  line(300, 600, 300, 300);
  pop();

  let rainbowColors = [
    color(255, 0, 0),
    color(255, 127, 0),
    color(255, 255, 0),
    color(127, 255, 0),
    color(0, 255, 0),
    color(0, 255, 127),
    color(0, 255, 255),
    color(0, 127, 255),
    color(0, 0, 255),
    color(75, 0, 130),
    color(139, 0, 255),
    color(255, 0, 255)
  ];

  push();
  translate(300, 250);   
  rotate(rotationAngle);  


  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);        
    fill(rainbowColors[i]);
    noStroke();

    drawPetal(rainbowColors[i]);
    pop();
  }

  pop(); 

  push();
  stroke('BLACK');
  strokeWeight(3);
  fill(252, 198, 71);
  circle(300, 250, 150);
  pop();

}


function drawPetal(petalColor) {
  triangle(0, 0, -38, -140, 38, -140);
  fill(petalColor);
  circle(0, -140, 75);

}
