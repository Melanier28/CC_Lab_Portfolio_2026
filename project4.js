//let img;

//function preload() {
  //img = loadImage('corpse.jpg');
//}

function setup() {

  // create the canvas

  canvas = createCanvas(400, 600);

  // attach the canvas to the div in your HTML

  canvas.parent("sketch-container");


  //image(img, 0, 0, 400, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
  
}

function draw() {
  background(255);
  stroke('black');

//right ear
  push();
  stroke('black');
  fill(102, 65, 122);
  strokeWeight(4);


  beginShape();
  curveVertex (274,98)
  curveVertex (290,87)
  curveVertex (302,71)
  curveVertex (311,55)
  curveVertex (314,39)
  curveVertex (307,34)
  curveVertex (291,38)
  curveVertex (278,47)
  curveVertex (265,59)
  curveVertex (254,72)
  curveVertex (249,84)
  curveVertex (257,86)
  curveVertex (265,91)
  endShape(CLOSE);
  pop();

//left arm
  push();
  strokeWeight(3);
  translate(110, 270);         
  rotate(-60);               
  fill(77, 55, 253);
  ellipse(0, 0, 160, 50);       
  pop();
  
//right arm
  push();
  strokeWeight(3);
  translate(290, 270);         
  rotate(60);               
  fill(77, 55, 253);
  ellipse(0, 0, 160, 50);       
  pop(); 
  
//tail
push();
  stroke('black');
  fill(102, 149, 128);
  strokeWeight(3);
  
  beginShape();
curveVertex(150,352)
curveVertex(144,364)
curveVertex(137,378)
curveVertex(131,388)
curveVertex(127,403)
curveVertex(129,416)
curveVertex(135,431)
curveVertex(149,440)
curveVertex(166,447)
curveVertex(186,454)
curveVertex(207,459)
curveVertex(226,466)
curveVertex(240,479)
curveVertex(250,492)
curveVertex(256,505)
curveVertex(255,518)
curveVertex(269,522)
curveVertex(274,512)
curveVertex(281,501)
curveVertex(284,484)
curveVertex(285,466)
curveVertex(283,449)
curveVertex(275,434)
curveVertex(265,421)
curveVertex(255,405)
curveVertex(252,389)
curveVertex(251,372)
curveVertex(252,359)
curveVertex(196,361)
  endShape(CLOSE);
  pop();
  
//fin
  push();
  stroke('black');
  fill(102, 149, 128);
  strokeWeight(3);
  beginShape();
curveVertex(265,508)
curveVertex(245,506)
curveVertex(217,502)
curveVertex(192,510)
curveVertex(172,522)
curveVertex(158,534)
curveVertex(143,543)
curveVertex(124,545)
curveVertex(136,561)
curveVertex(160,572)
curveVertex(190,575)
curveVertex(222,568)
curveVertex(245,556)
curveVertex(255,544)
curveVertex(262,534)
curveVertex(261,548)
curveVertex(266,562)
curveVertex(285,575)
curveVertex(309,581)
curveVertex(331,574)
curveVertex(349,569)
curveVertex(337,561)
curveVertex(328,549)
curveVertex(321,531)
curveVertex(310,519)
curveVertex(292,517)
curveVertex(277,515)
  endShape(CLOSE);
  pop();
  
//body
  push();
  strokeWeight(3);
  fill(77, 55, 253);
  ellipse(200, 280, 160, 230);
  pop();
  
//yellow belly
  push();
  fill(255, 196, 57)
  ellipse(200, 325, 90, 70)
  pop();
  
//right yellow
  push()
  translate(317, 319);         
  rotate(55);               
  fill(255, 196, 57);
  ellipse(0, 0, 44, 28);       
  pop();
  
  //left yellow
  push()
  translate(83, 319);         
  rotate(-55);               
  fill(255, 196, 57);
  ellipse(0, 0, 44, 28);       
  pop();
  
//head
  push();
  strokeWeight(3);
  fill(102, 65, 122);
  ellipse(200, 140, 210,130);
  pop();
  
//face
  push();
  stroke('black');
  fill(213, 228, 225);
  strokeWeight(4);

  beginShape();
  curveVertex(200, 113);

  curveVertex(177, 110); 
  curveVertex(154, 111); 
  curveVertex(137, 117); 
  curveVertex(124, 134); 
  curveVertex(120, 158);
  curveVertex(130, 182);
  curveVertex(139, 190); 
  curveVertex(145, 194);
  curveVertex(162, 200); 
  curveVertex(182, 203); 
  curveVertex(227, 202);
  curveVertex(260, 192); 
  curveVertex(282, 172); 
  curveVertex(287, 155); 
  curveVertex(285, 136); 
  curveVertex(270, 118); 
  curveVertex(246, 108); 
  curveVertex(221, 110);

  curveVertex(200, 113);
  endShape(CLOSE);
  pop();
 
//face details
  push();
  noFill();
  strokeWeight(3);
  beginShape();
  curveVertex(140,122)
  curveVertex(139,129)
  curveVertex(174,136)
  curveVertex(179,129)
  endShape();
  pop();
  
  push();
  noFill();
  strokeWeight(3);
  beginShape();
  curveVertex(221,126)
  curveVertex(223, 135)
  curveVertex(261, 130)
  curveVertex(160, 120)
  endShape();
  pop();
  


//left ear
  push();
  stroke('black');
  fill(102, 65, 122);
  strokeWeight(4);

  beginShape();

  curveVertex(162,80)
  curveVertex (144,76)
  curveVertex (126,75)
  curveVertex (113,85)
  curveVertex (107,99)
  curveVertex (105,113)
  curveVertex (107,125)
  curveVertex (112,138)
  curveVertex (120,130)
  curveVertex (123,118)
  curveVertex (128,104)
  curveVertex (135,93)
  curveVertex (147,86)


  endShape(CLOSE);
  pop();



  
  
  // mouse coordinates
  push();
  fill(0);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  stroke(0);
  pop();
}
