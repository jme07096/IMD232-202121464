let mover;
let gravityA;
let mVec;
let pMVec;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  mover = new Mover(width / 2, height / 2, 60);
  gravity = createVector(0, 0.4);

  mVec = createVector(mouseX, mouseY);
  pMVec = createVector(pmouseX, pmouseY);

  background(255);
}

function draw() {
  const force = p5.Vector.mult(gravity, mover.mass);
  background(255);
  let gravityA = createVector(gravity.x, gravity.y);
  gravityA.mult(mover.mass);
  mover.applyForce(gravityA);

  if (mover.contackEdge()) {
    let c = 0.5;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.mult(c);
    mover.applyForce(friction);
  }
  if (mover.isDragging) {
    const dragForce = p5.Vector.sub(mVec, pMVec);
    mover.applyForce(dragForce);
  }

  mover.update();
  mover.checkEdges();
  mover.display();
}

function mouseMoved() {
  mover.mouseMoved(mouseX, mouseY);
}

function mousePressed() {
  // pMVec.set(pmouseX,pmouseY);
  // mVec.set(mouseX,mouseY);
  mover.mousePressed(mouseX, mouseY);
}

function mouseDragged() {
  mover.mouseDragged(mouseX, mouseY);
}

function mouseReleased() {
  pMVec.set(pmouseX, pmouseY);
  mVec.set(mouseX, mouseY);
  throwingForce = p5.Vector.sub(mVec, pMVec);
  mover.applyForce(throwingForce.mult(0.01));
  mover.mouseReleased();
}
