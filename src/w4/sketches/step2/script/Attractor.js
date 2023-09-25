class Attractor {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.mass = mass;
  }

  attractor(mover) {
    let directionVector = p5.Vector.sub(this.pos, mover.pos);
    let distance = dirVectpr.mag();
    let strength = (this.mass * mover.mass) / distance ** 2;
    return directionVector.setMag(strength);
  }
  display() {
    ellipse(this.pos.x, this.pos.y, 100);
  }
}
