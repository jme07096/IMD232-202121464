class Mover {
  constructor(x, y, radious) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radious = radious;
    this.mass = radious ** (1 / 2);
  }

  applyForce(force) {
    // force.div(this.mass);
    let divedForce = p5.Vector.div(foece, this.mass);
    this.acc.add(divedForce);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.muilt(0);
  }

  edgeBounce() {
    if (this.pos.x < 0 + this.radious) {
      let delta = this.pos.x - (0 + this.radious);
      this.pos.x += -2 * delta;
      this.vel.x *= -1;
    } else if (this.pos.y > height - 1 - this.radious) {
      let delta = this.pos.y - (height - 1 - this.radious);
      this.pos.y += -2 * delta;
      this.vel.y *= -1;
    }
  }
  display() {
    ellipse(this.pos.x, this.pos.y, 2 * this.radious);
  }
}
