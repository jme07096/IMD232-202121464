let pos;
let vel;
let acc;
let mv;
let posToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector(0, 0);
  mv = createVector();
  acc = createVector();
  acc.mult(0.1);
  posToMv = createVector();
}

function draw() {
  background('salmon');
  update();
  display();
  mv.set(mouseX, mouseY);
  Mover();
}

function Mover() {
  acc = p5.Vector.sub(mv, pos);
  translate(pos.x, pos.y);
  posToMv = p5.Vector.sub(mv, pos);
  acc.normalize();

  strokeWeight(1);
  stroke('white');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);
  stroke('fuchsia');
  line(0, 0, vel.x * 5, vel.y * 5);

  if (mouseIsPressed == true) {
    acc.mult(-0.1);
  } else {
    acc.mult(0.1);
  }

  stroke('aqua');
  line(0, 0, acc.x * 50, acc.y * 50);
}

function update() {
  vel.add(acc);
  vel.limit(5);
  pos.add(vel);
}

function display() {
  noStroke();
  fill('black');
  ellipse(pos.x, pos.y, 50);
}
