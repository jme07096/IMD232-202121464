let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  pos = createVector(width / 2, height / 2);
  //임의 방향으로 1만큼 뻗은 백터만들기 1
  //   vel = createVector(0, 1);
  //   vel.rotate(random(TAU));
  //   console.log(vel.mag());

  vel = p5.Vector.random2D();

  //   vel.mult(5);
  vel.mult(0);
  acc = createVector(0, 0.1);
  console.log(vel.mag());
}
function draw() {
  background('white');
  update();
  infiniteEdge();
  disPlay();

  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}
function update() {
  vel.add(acc);
  vel.limit(20);
  pos.add(vel);
}

function infiniteEdge() {
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
}

function disPlay() {
  ellipse(pos.x, pos.y, 2 * radius);
}
