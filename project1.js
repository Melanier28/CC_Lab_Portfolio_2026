function setup() {
  canvas = createCanvas(400, 400);
 
  // attach the canvas to the div in your HTML
  canvas.parent("sketch-container");
  angleMode(DEGREES);
}

function draw() {
  
  background(51, 51, 204);
  noStroke();
  rectMode(CENTER); 
  fill(36, 36, 143);
  rect(200, 50, 400, 100);
  
  push();
  rotate(90);
  fill(41, 41, 163);
  rect(70, -200, 80, 400);
  pop();
  
  push();
  rotate(90);
  fill(46, 46, 184);
  rect(90, -200, 65, 400);
  pop();
  
  push();
  blendMode(HARD_LIGHT);
  fill(255, 204, 102);
  circle(200,150,150);
  pop();
  
  push();
  rotate(90);
  fill(0, 102, 204);
  rect(210, -200, 120, 400);
  pop();
  
  push();
  rotate(90);
  fill(0, 89, 179);
  rect(250, -200, 50, 400);
  pop();
  
  push();
  rotate(90);
  fill(0, 77, 153);
  rect(265, -200, 20, 400);
  pop();
  
  push();
  rotate(90);
  fill(255, 179, 102);
  rect(335, -200, 130, 400);
  pop();
  
  push();
  rotate(90);
  fill(255, 166, 77);
  rect(380, -200, 40, 400);
  pop();
  
  push();
  rotate(90);
  fill(255, 153, 51);
  rect(390, -200, 15, 400);
  pop();
  
  push();
  scale(1.5);
  translate(-260,0);
  rotate(10);
  fill(0, 0, 51);
  square(353,120,40);
  square(375,90,25);
  pop();
  
  push();
  scale(1.5);
  translate(-260,0);
  fill(0,0,51);
  triangle(340,162,342,204,389,155);
  triangle(311,158,304,198,267,138);
  pop();
  
  push();
  stroke('WHITE');
  strokeWeight(9);
  line(30,30,60,55);
  line(60,55,90,30);
  line(230,70,245,100);
  line(245,100,280,90);
  line(32,43,60,60);
  line(87,42,60,60);
  line(225,80,242,100);
  line(276,99,242,100);
  pop();
  
  // mouse coordinates
  push();
  fill(0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  pop();
}

// Reflection:
// Name: Melanie Reyes
// Partner's Name: Miaram
//Description: The seaside in Japan is calm. Small fishing boats rest near the shore, and seagulls fly avove the water as gentle waves reach the land. The sun is sinking, and both the sky and the sea are blue. Far away, the horizon looks soft and quiet.
//The language my partner used seemed very straight-forward and a slight poetic characteristic. I tried to follow the instructions as closely as possible, keeping details the same. I wanted to add more depth into the image and I decided to do that by overlapping rectangles to create the sort of gradient look.
