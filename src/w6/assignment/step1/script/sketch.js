// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background('cyamediumpurplen');
}

function draw() {
  particleArray.push(new Particle(random(width), -10));

  background('mediumpurple');

  for (let a = 0; a < particleArray.length; a++) {
    //a++ 1을 더하는 것.
    particleArray[a].applyForce(gravity); //초기값
    particleArray[a].update();
    particleArray[a].display();
  }

  for (let a = particleArray.length - 1; a >= 0; a--) {
    if (particleArray[a].isDead()) {
      particleArray.splice(a, 1);
    }
  }

  console.log(particleArray.length);
}
