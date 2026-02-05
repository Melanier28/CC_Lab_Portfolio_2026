let fanImages = [];
let currentFrame = 0;
let fanOn = false;
let animationInterval;

let buttonX = 330;
let buttonY = 520;
let buttonW = 20;
let buttonH = 10;

function preload() {
  // Replace these with your actual image paths
  fanImages[0] = loadImage('fan1.png'); // Still blades
  fanImages[1] = loadImage('fan2.png'); // Slightly moved blades
  fanImages[2] = loadImage('fan3.png'); // Blurred blades
}

function setup() {
  // create the canvas

  canvas = createCanvas(600, 600);

  // attach the canvas to the div in your HTML

  canvas.parent("sketch-container");


  imageMode(CENTER);

}

function draw() {
  background(220);
 
push();
for (let x = 0; x <= width; x += 100) {
  for (let y = 0; y <= height; y += 100) {
    if (fanOn) {
      noFill(); // bright purple when fan is on
    } else {
      fill(255, 0, 255); // invisible when fan is off
    }
    noStroke(); // or add stroke if you want outlines
    ellipse(x, y, 30);
  }
}
pop();
  
  push();
  noStroke();
  fill(242, 194, 22);
  quad(260, 450, 340, 450, 365, 540, 235, 540);
  pop();
  
  if (fanImages.length > 0) {
  let scaleFactor = 0.2;
  let img = fanImages[currentFrame];
  let imgWidth = img.width * scaleFactor;
  let imgHeight = img.height * scaleFactor;
  image(img, width / 2, height / 2, imgWidth, imgHeight);
  }
  
  push();
  strokeWeight(7);
  noFill()
  circle(300, 300, 380);
  pop();
  
  push();
  noFill();
  strokeWeight(3);
  circle(300, 300, 300);
  pop();
  
  push();
  line(300, 110, 300, 490);
  line(110, 300, 490, 300);
  line(163, 166, 436, 431);
  line(430, 160, 170, 440);
  pop();
  
  push();
  noStroke();
  fill(255, 255, 255, 100);
  circle(300, 300, 80);
  pop();
  
  push();
  noFill();
  stroke('white');
  circle(300, 300, 65);
  pop();
  
  push();
  noStroke();
  fill(fanOn ? 'red' : 'green'); // Red = on, Green = off
  rect(buttonX, buttonY, buttonW, buttonH);
  pop();
}

function mousePressed() {
  // Check if the mouse clicked inside your button
  if (
    mouseX > buttonX && mouseX < buttonX + buttonW &&
    mouseY > buttonY && mouseY < buttonY + buttonH
  ) {
    toggleFan();
  }
}

function toggleFan() {

  let frames;
  let index = currentFrame;

  if (!fanOn) {
    // Fan is off, turn it on: 0 -> 1 -> 2
    frames = [1, 2];
  } else {
    // Fan is on, turn it off: 2 -> 1 -> 0
    frames = [1, 0];
  }

  let i = 0;
  animationInterval = setInterval(() => {
    currentFrame = frames[i];
    i++;

    if (i >= frames.length) {
      clearInterval(animationInterval);
      fanOn = !fanOn;
    }
  }, 200); // Delay between frames
}
