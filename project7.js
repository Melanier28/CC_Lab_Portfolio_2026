// ================== IMAGE ARRAYS ====================
let itemImages = [];
let targetImages = [];
let furnitureImages = [];
let enemyImages = [];

let meImg;
let startScreenImg;
let level1Background;
let level2Background;
let level3Background;

let startTransitionImg;
let level2TransitionImg;
let level3TransitionImg;
let endingScreenImg;

let playerImg;

let myFont;

let collectSound;
let dingSound;

// ================== GAME STATE ======================
let gameState = "start";
let level = 0;

let transitionImage = null;
let transitionEndTime = 0;
let transitionNextState = "";

// ================== LEVEL VARIABLES =================
let player;
let furniture = [];
let foundObjects = [];
let collected = 0;

// Level 2
let targets = [];
let enemies = [];

// Level 3
let towerAngle = 0;
let towerDir = 1;
let towerLeanSpeed = 0.003;
let cursorX = 0;
let cursorSpeed = 4;
let zoneX = 0;
let zoneWidth = 60;
let successCount = 0;

let barCenterX, barY, barWidth, barHeight;

// ====================================================
//                     PRELOADS
// ====================================================
function preload() {
  // Level 1 objects
  itemImages[0] = loadImage("lvl 1/bear.png");
  itemImages[1] = loadImage("lvl 1/cat.png");
  itemImages[2] = loadImage("lvl 1/penguin.png");
  itemImages[3] = loadImage("lvl 1/bunny.png");
  itemImages[4] = loadImage("lvl 1/whale.png");

  // Furniture
  furnitureImages[0] = loadImage("lvl furniture/plant2.png");
  furnitureImages[1] = loadImage("lvl furniture/dresser.png");
  furnitureImages[2] = loadImage("lvl furniture/plant1.png");
  furnitureImages[3] = loadImage("lvl furniture/mirror.png");
  furnitureImages[4] = loadImage("lvl furniture/stool.png");
  furnitureImages[5] = loadImage("lvl furniture/bed.png");
  furnitureImages[6] = loadImage("lvl furniture/bookshelf.png");
  furnitureImages[7] = loadImage("lvl furniture/chair.png");
  furnitureImages[8] = loadImage("lvl furniture/stool2.png");

  // Level 2 shards
  targetImages[0] = loadImage("lvl 2/shard1.png");
  targetImages[1] = loadImage("lvl 2/shard2.png");
  targetImages[2] = loadImage("lvl 2/shard3.png");
  targetImages[3] = loadImage("lvl 2/shard4.png");
  targetImages[4] = loadImage("lvl 2/shard5.png");

  // Enemies
  enemyImages[0] = loadImage("enemies/enemy1.png");
  enemyImages[1] = loadImage("enemies/enemy2.png");
  enemyImages[2] = loadImage("enemies/enemy3.png");
  enemyImages[3] = loadImage("enemies/enemy4.png");

  // Level 3 sprite
  meImg = loadImage("lvl 3/me.png");

  // Screens
  startScreenImg = loadImage("startscreen.png");
  endingScreenImg = loadImage("transitions/ending.png");
  // Player

  playerImg = loadImage("player.png");

  // Level backgrounds
  level1Background = loadImage("lvl1Back.png");
  level2Background = loadImage("level2Back.png");
  level3Background = loadImage("level3Back.png");

  // Transitions
  startTransitionImg = loadImage("transitions/transition1.png");
  level2TransitionImg = loadImage("transitions/transition2.png");
  level3TransitionImg = loadImage("transitions/transition3.png");
  // Font

  myFont = loadFont("font.ttf");
  
  collectSound = loadSound("collect.wav");
  dingSound = loadSound("ding.wav");
}

// ====================================================
//                     SETUP
// ====================================================
function setup() {
  // create the canvas

  canvas = createCanvas(600, 400);

  // attach the canvas to the div in your HTML

  canvas.parent("sketch-container");


  player = new Player();
}

// ====================================================
//                  TRANSITIONS
// ====================================================
function startTransition(img, duration, nextState) {
  transitionImage = img;
  transitionEndTime = millis() + duration;
  transitionNextState = nextState;
  gameState = "transition";
}

function drawTransition() {
  image(transitionImage, 0, 0, width, height);
  if (millis() > transitionEndTime) {
    gameState = transitionNextState;
  }
}

// ====================================================
//                     DRAW LOOP
// ====================================================
function draw() {
  if (gameState === "start") {
    image(startScreenImg, 0, 0, width, height);
  } else if (gameState === "transition") {
    drawTransition();
  } else if (gameState === "level1") {
    image(level1Background, 0, 0, width, height);
    drawLevel1();
  } else if (gameState === "level2") {
    image(level2Background, 0, 0, width, height);
    drawLevel2();
  } else if (gameState === "level3") {
    image(level3Background, 0, 0, width, height);
    drawLevel3();
  } else if (gameState === "end") {
    image(endingScreenImg, 0, 0, width, height);
  }
}

// ====================================================
//                    LEVEL 1
// ====================================================
function setupLevel1() {
  collected = 0;
  foundObjects = [];
  furniture = [];

  furniture = [
    { x: 335, y: 95, w: 60, h: 80, img: furnitureImages[0], revealed: false },
    { x: 380, y: 50, w: 100, h: 120, img: furnitureImages[1], revealed: false },
    { x: 175, y: 90, w: 65, h: 85, img: furnitureImages[2], revealed: false },
    { x: 230, y: 40, w: 110, h: 160, img: furnitureImages[3], revealed: false },
    { x: 265, y: 150, w: 40, h: 60, img: furnitureImages[4], revealed: false },
    { x: 430, y: 120, w: 145, h: 200, img: furnitureImages[5], revealed: false },
    { x: 45, y: 100, w: 140, h: 80, img: furnitureImages[6], revealed: false },
    { x: 25, y: 170, w: 100, h: 130, img: furnitureImages[7], revealed: false },
    { x: 120, y: 235, w: 45, h: 55, img: furnitureImages[8], revealed: false },
  ];

  let chosen = [];
  while (chosen.length < 5) {
    let i = floor(random(furniture.length));
    if (!chosen.includes(i)) {
      chosen.push(i);
      furniture[i].hasObject = true;
      furniture[i].imgIndex = chosen.length - 1;
    }
  }
}

function drawLevel1() {
  textFont(myFont);
  textStyle(BOLD);
  textSize(18);
  fill(133, 61, 93);
  text(`Collected: ${collected}/5`, 20, 30);

  for (let f of furniture) {
    if (!f.revealed) image(f.img, f.x, f.y, f.w, f.h);

    if (f.revealed && f.hasObject && !foundObjects.includes(f)) {
      push();
      imageMode(CENTER);
      image(itemImages[f.imgIndex], f.x + f.w / 2, f.y + f.h / 2, 80, 80);
      pop();
    }
  }

  player.move();
  player.display();

  for (let f of furniture) {
    if (!f.revealed && player.touchesRect(f)) {
      f.revealed = true;
    }
  }

  if (mouseIsPressed) {
    for (let f of furniture) {
      if (
        f.revealed &&
        f.hasObject &&
        !foundObjects.includes(f) &&
        dist(mouseX, mouseY, f.x + f.w / 2, f.y + f.h / 2) < 20
      ) {
        foundObjects.push(f);
        collected++;
        
        collectSound.play();
      }
    }
  }

  if (collected >= 5) {
    startTransition(level2TransitionImg, 5000, "level2");
    setupLevel2();
  }
}

// ====================================================
//                    LEVEL 2
// ====================================================
function setupLevel2() {
  player.reset(300, 400);
  targets = [];
  enemies = [];
  collected = 0;

  for (let i = 0; i < 5; i++) {
    targets.push({
      x: random(50, width - 50),
      y: random(50, height - 50),
      collected: false,
      imgIndex: i,
    });
  }

  for (let i = 0; i < 4; i++) {
    enemies.push({
      x: random(width),
      y: random(height),
      w: 30,
      h: 45,
      vx: random([-3, 3]),
      vy: random([-3, 3]),
      img: enemyImages[i % enemyImages.length],
    });
  }
}

function drawLevel2() {
  textFont(myFont);
  textStyle(BOLD);
  textSize(18);
  fill(62, 97, 34);
  text(`Collected: ${collected}/5`, 20, 30);

  player.move();
  player.display();

  // enemies
  for (let e of enemies) {
    push();
    imageMode(CENTER);
    image(e.img, e.x + e.w / 2, e.y + e.h / 2, e.w, e.h);
    pop();

    e.x += e.vx;
    e.y += e.vy;
    if (e.x < 0 || e.x > width - e.w) e.vx *= -1;
    if (e.y < 0 || e.y > height - e.h) e.vy *= -1;

    if (player.touchesRect(e)) {
      setupLevel2();
      return;
    }
  }

  // shards
  for (let t of targets) {
    if (!t.collected) {
      push();
      imageMode(CENTER);
      image(targetImages[t.imgIndex], t.x, t.y, 80, 80);
      pop();
    }

    if (!t.collected && dist(player.x, player.y, t.x, t.y) < 15) {
      t.collected = true;
      collected++;
      
      collectSound.play();
    }
  }

  if (collected >= 5) {
    startTransition(level3TransitionImg, 5000, "level3");
    setupLevel3();
  }
}

// ====================================================
//                    LEVEL 3
// ====================================================

function setupLevel3() {
  towerAngle = 0;
  towerDir = 1;
  cursorX = 0;
  cursorSpeed = 4;
  zoneX = random(-70, 70);
  zoneWidth = 60;
  successCount = 0;

  barCenterX = width / 2;
  barY = height - 60;
  barWidth = 300;
  barHeight = 20;
}

function drawLevel3() {
  textFont(myFont);
  textStyle(BOLD);
  textSize(18);
  fill(0, 12, 46);
  text(`Success Count: ${successCount}/5`, 20, 30);

  push();
  translate(width / 2, height / 2 + 80);
  rotate(towerAngle);
  imageMode(CENTER);
  image(meImg, 0, -55, 120, 240);
  pop();

  towerAngle += towerLeanSpeed * towerDir;
  if (abs(towerAngle) > 1) {
    setupLevel3();
    return;
  }

  rectMode(CENTER);

  noStroke();
  fill(100);
  rect(barCenterX, barY, barWidth, barHeight);

  noStroke();
  fill(255, 50, 50);
  rect(barCenterX + zoneX, barY, zoneWidth, barHeight);

  noStroke();
  fill(0, 255, 100);
  rect(barCenterX + cursorX, barY, 20, barHeight);

  cursorX += cursorSpeed;
  let edge = barWidth / 2 - 10;
  if (cursorX > edge || cursorX < -edge) cursorSpeed *= -1;

  if (successCount >= 5) {
    gameState = "end";
  }
}

// ====================================================
//                 PLAYER CLASS
// ====================================================
class Player {
  constructor() {
    this.x = 300;
    this.y = 400;
    this.sizex = 30;
    this.sizey = 45;
    this.speed = 1.5;
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) this.x -= this.speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += this.speed;
    if (keyIsDown(UP_ARROW)) this.y -= this.speed;
    if (keyIsDown(DOWN_ARROW)) this.y += this.speed;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display() {
    push();
    imageMode(CENTER);
    image(playerImg, this.x, this.y, this.sizex, this.sizey);
    pop();
  }

  touchesRect(r) {
    let px1 = this.x - this.sizex / 2;
    let py1 = this.y - this.sizey / 2;
    let px2 = this.x + this.sizex / 2;
    let py2 = this.y + this.sizey / 2;

    let rx1 = r.x;
    let ry1 = r.y;
    let rx2 = r.x + r.w;
    let ry2 = r.y + r.h;

    return !(px2 < rx1 || px1 > rx2 || py2 < ry1 || py1 > ry2);
  }

  reset(x = width / 2, y = height / 2) {
    this.x = x;
    this.y = y;
  }
}

// ====================================================
//                 MOUSE INPUT
// ====================================================
function mousePressed() {
  // START SCREEN - begin game button
  if (gameState === "start") {
    if (mouseX > 330 && mouseX < 550 && mouseY > 245 && mouseY < 332) {
      startTransition(startTransitionImg, 4000, "level1");
      setupLevel1();
      return;
    }
  }

  // Lvl 3 click logic
  if (gameState === "level3") {
    let zoneLeft = zoneX - zoneWidth / 2;
    let zoneRight = zoneX + zoneWidth / 2;

    if (cursorX > zoneLeft && cursorX < zoneRight) {
      successCount++;
      dingSound.play();
      towerAngle = 0;
      towerDir *= -1;
      cursorSpeed = constrain(cursorSpeed * 1.2, -12, 12);
      zoneWidth = max(20, zoneWidth * 0.86);

      setTimeout(() => {
        zoneX = random(-70, 70);
      }, 150);
    } else {
      towerAngle += 0.1 * towerDir;
    }
  }
}
