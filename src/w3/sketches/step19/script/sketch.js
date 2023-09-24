let pos;
let vel;
let acc;
let mv;
let posToMv;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  pos = createVector(random(width), random(height));
  vel = createVector();
  mv = createVector();
  acc = createVector();
  posToMv = createVector();
}

function draw() {
  background('salmon');
  update();
  display();

  if (mouseIsPressed === true) {
  } else {
  }

  strokeWeight(3);
  translate(pos.x, pos.y);

  mv.set(mouseX, mouseY);
  acc.set(posToMv.x, posToMv.y);

  posToMv = p5.Vector.sub(mv, pos);
  stroke('fuchsia');
  line(0, 0, posToMv.x, posToMv.y);

  strokeWeight(2);

  stroke('aqua');
  line(0, 0, vel.x * 10, vel.y * 10);

  acc.normalize();
  acc.mult(0.1);

  strokeWeight(3);
  stroke('yellow');
  line(0, 0, acc.x * 0.1, acc.y * 0.1);
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
