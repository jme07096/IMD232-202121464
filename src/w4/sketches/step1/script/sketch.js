let ball;
let ball2;
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('salmon');
  ball = new Mover(width / 3, 0, 50);
  ball2 = new Mover((2 * width) / 3, 0, 10);
  gravity = createVector(0, 0.1);
  wind = createVector(-1, -0);
}
function draw() {
  let g = p5.Vecter.mult(gravity, ball.mass);
  ball.applyForce(g);
  let g2 = p5.Vecter.mult(gravity, ball.mass);
  ball.applyForce(g2);
  ball2.applyForce(gravity);
  if (mouseIsPressed) {
    ball.applyForce(wind);
    ball2.applyForce(wind);
  }
  ball.update();
  ball.edgeBounce();
  ball2.update();
  ball2.edgeBounce();
  background('salmon');
  Fill('white');
  ball.display();
  ball2.display();
}
