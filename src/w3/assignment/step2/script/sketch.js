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
  posToMv = createVector();
}

function draw() {
  background('salmon');
  update();
  display();

  mv.set(mouseX, mouseY);
  acc.set(posToMv.x, posToMv.y);
  translate(pos.x, pos.y);
  posToMv = p5.Vector.sub(mv, pos);

  strokeWeight(1);
  stroke('white');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);
  stroke('fuchsia');
  line(0, 0, vel.x * 5, vel.y * 5);

  acc.normalize();
  acc.mult(0.1);

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
