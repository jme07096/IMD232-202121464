function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  fill(255, 76, 30);
  rect(440, 400, 500, 320);

  fill(255, 90, 130);
  ellipse(300, 100, 210, 210);
  ellipse(300, 100, 190, 190);
  fill(255, 400, 120);
  arc(300, 100, 100, 100, 19, PI + QUARTER_PI, CHORD);

  rect(545, 350, 160, 50);

  fill(255, 60, 20);
  ellipse(560, 350, 15, 90);
  ellipse(570, 350, 15, 90);
  ellipse(580, 350, 15, 90);
  ellipse(590, 350, 15, 90);
  ellipse(600, 350, 15, 90);
  ellipse(610, 350, 15, 90);
  ellipse(620, 350, 15, 90);
  ellipse(630, 350, 15, 90);
  ellipse(640, 350, 15, 90);
  ellipse(650, 350, 15, 90);
  ellipse(660, 350, 15, 90);
  ellipse(670, 350, 15, 90);
  ellipse(680, 350, 15, 90);
  ellipse(690, 350, 15, 90);

  ellipse(90, 350, 35, 390);
  ellipse(114, 350, 35, 190);
  ellipse(114, 450, 35, 190);
  ellipse(135, 430, 35, 190);

  fill(255, 30, 320);
  square(735, 310, 90, 20);
  square(745, 320, 70, 20);
  fill(255, 400, 120);
  ellipse(780, 355, 65, 65);

  fill(255, 30, 320);
  square(35, 465, 480, 20);
  square(30, 470, 160, 20);
  fill(255, 30, 120);
  ellipse(110, 553, 150, 150);

  rect(235, 355, 150, 90);
  rect(260, 360, 135, 75);
  fill(255, 60, 120);
  rect(320, 360, 15, 105);
}
