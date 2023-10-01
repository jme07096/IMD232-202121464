let moverA;
let moverB;
let wind;
let gravity;
function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  moverA = new MoverWithMass(width / 3, height / 2, 10);
  moverB = new MoverWithMass((2 * width) / 3, height / 2, 1);
  gravity = createVector(0, 0.1);
  wind = createVector(0.2, 0);
}

function draw() {
  background(255);

  moverA.applyForce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverA.applyForce(wind);
  }

  moverA.update();
  moverA.checkEdges();
  moverA.displayVectors();
  moverA.display();

  moverB.applyForce(gravity);
  if (mouseIsPressed && isMouseInsideCanvas()) {
    moverB.applyForce(wind);
  }

  moverB.update();
  moverB.checkEdges();
  moverB.displayVectors();
  moverB.display();
}
