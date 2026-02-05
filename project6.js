let state = "off";

function setup() {
   // create the canvas
  canvas = createCanvas(600, 600);

  // attach the canvas to the div in your HTML

  canvas.parent("sketch-container");
  rectMode(CENTER);
}

function draw() {
  background(55);

  drawPhoneShell();

  if (state == "off") {
    if (millis() > 3000) {
      state = "alarm";
    }
  } else if (state == "alarm") {
    drawAlarmScreen();
  } else if (state == "locked") {
    drawLockedScreen();
  } else if (state == "home") {
    drawHomeScreen();
  } else if (state == "app1") {
    drawApp1Screen();
  } else if (state == "app2") {
    drawApp2Screen();
  } else if (state == "app3") {
    drawApp3Screen();
  } else if (state == "app4") {
    drawApp4Screen();
  } else if (state == "app5") {
    drawApp5Screen();
  } else if (state == "app6") {
    drawApp6Screen();
  }

  if (state == "home") {
    fill(114, 114, 114, 100);
    rect(300, 490, 250, 80, 20);
  }

}

//drawing

function drawPhoneShell() {
  noStroke();
  fill(255, 139, 245);
  rect(300, 300, 320, 520, 45);

  fill(62);
  rect(300, 300, 300, 500, 35);

  if (state == "off") {
    fill(0); // black screen
  } else {
    fill(255); // white screen
  }
  rect(300, 300, 280, 480, 25);

  fill(62);
  rect(300, 65, 100, 25, 5);
}

function drawAlarmScreen() {
  fill(255, 0, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("ALARM", 300, 280);

  fill(0);
  rect(300, 400, 100, 40, 10);
  fill(255);
  textSize(20);
  text("STOP", 300, 400);
}

function drawLockedScreen() {
  fill(0);
  textSize(30);
  fill(100);
  textAlign(CENTER, CENTER);
  text("Tap to unlock", 300, 280);
}

function drawHomeScreen() {
  push(); // App 1
  fill(255, 60, 199);
  square(210, 170, 60, 10); 
  fill(255)
  square(210, 170, 43, 10);
  fill(231, 51, 255);
  square(210, 170, 36, 8);
  fill(255);
  circle(210, 170, 20);
  fill(255, 44, 186);
  circle(210, 170, 12);
  fill(255);
  circle(220, 158, 5);
  pop();
  
  push();
  fill(245);
  square(300, 170, 60, 10); // App 2
  fill(255, 126, 32)
  textStyle(BOLD);
  textSize(15);
  text("Dunkin'", 300, 170);
 
  pop();
  
  
  square(390, 170, 60, 10); // App 3
  square(210, 260, 60, 10); // App 4
  square(300, 260, 60, 10); // App 5
  square(390, 260, 60, 10); // App 6
}

// app screen

function drawApp1Screen() {
  fill(255, 100, 100);
  rect(300, 300, 280, 480, 25);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 1", 300, 300);
  drawHomeButton();
}

function drawApp2Screen() {
  fill(100, 255, 100);
  rect(300, 300, 280, 480, 25);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 2", 300, 300);
  drawHomeButton();
}

function drawApp3Screen() {
  fill(100, 100, 255);
  rect(300, 300, 280, 480, 25);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 3", 300, 300);
  drawHomeButton();
}

function drawApp4Screen() {
  fill(255, 255, 100);
  rect(300, 300, 280, 480, 25);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 4", 300, 300);
  drawHomeButton();
}

function drawApp5Screen() {
  fill(255, 100, 255);
  rect(300, 300, 280, 480, 25);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 5", 300, 300);
  drawHomeButton();
}

function drawApp6Screen() {
  fill(100, 255, 255);
  rect(300, 300, 280, 480, 25);
  fill(0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("APP 6", 300, 300);
  drawHomeButton();
}

function drawHomeButton() {
  fill(0);
  rect(300, 500, 100, 30, 10); // Home button
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("HOME", 300, 500);
}

// clicking

function mousePressed() {
  if (state == "alarm") {
    if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 420) {
      state = "locked";
    }
  } else if (state == "locked") {
    state = "home";
  } else if (state == "home") {
    // Check which app button is clicked
    if (mouseX > 180 && mouseX < 240 && mouseY > 140 && mouseY < 200) {
      state = "app1";
    } else if (mouseX > 270 && mouseX < 330 && mouseY > 140 && mouseY < 200) {
      state = "app2";
    } else if (mouseX > 360 && mouseX < 420 && mouseY > 140 && mouseY < 200) {
      state = "app3";
    } else if (mouseX > 180 && mouseX < 240 && mouseY > 230 && mouseY < 290) {
      state = "app4";
    } else if (mouseX > 270 && mouseX < 330 && mouseY > 230 && mouseY < 290) {
      state = "app5";
    } else if (mouseX > 360 && mouseX < 420 && mouseY > 230 && mouseY < 290) {
      state = "app6";
    }
  } else if (state.startsWith("app")) {
    // Home button click
    if (mouseX > 250 && mouseX < 350 && mouseY > 485 && mouseY < 515) {
      state = "home";
    }
  }
}
