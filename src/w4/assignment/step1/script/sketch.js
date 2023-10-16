const bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  reset();
}

function draw() {
  background(255);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        const force = bodies[i].attract(bodies[j]);
        bodies[j].applyForce(force);
      }
    }
    bodies[i].update();
    bodies[i].display();
  }
}

function mousePressed() {
  if (isMouseInsideCanvas());
  {
    reset();
  }
}

function reset() {
  for (let i = 0; i < bodyNum; i++) {
    const mass = random(16, 100);
    bodies[i] = new Body(random(width), random(height), random(0.1, 2));
  }
}
