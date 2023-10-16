class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.accDisplay = createVector(0, 0);
    this.mass = mass;
    this.rad = this.mass ** 0.5 * 10;

    this.isHover;
    this.isDragging;
    this.draggingOffset;
  }

  applyForce(force) {
    if (!this.isDragging) {
      let forceDividedByMass = createVector(force.x, force.y);
      forceDividedByMass.div(this.mass);
      this.acc.add(forceDividedByMass);
    }
  }

  update() {
    if (!this.isDragging) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.accDisplay.set(this.acc);
      this.acc.mult(0);
    }
  }
  contackEdge() {
    if (this.pos.y >= height - 1 - this.rad - 1) {
      return true;
    } else {
      return false;
    }
  }

  checkEdges() {
    const bounce = -0.9;
    if (this.pos.x < 0 + this.rad) {
      this.pos.x -= 0 + this.rad;
      this.pos.x *= -1;
      this.pos.x += 0 + this.rad;
      this.vel.x *= bounce;
    } else if (this.pos.x > width - 1 - this.rad) {
      this.pos.x -= width - 1 - this.rad;
      this.pos.x *= -1;
      this.pos.x += width - 1 - this.rad;
      this.vel.x *= bounce;
    }
    if (this.pos.y > height - 1 - this.rad) {
      this.pos.y -= height - 1 - this.rad;
      this.pos.y *= -1;
      this.pos.y += height - 1 - this.rad;
      this.vel.y *= bounce;
    }
  }

  display() {
    noStroke();
    fill(0);
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }

  mouseMoved(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
  }

  mousePressed(mX, mY) {
    this.isHover =
      (this.pos.x - mX) ** 2 + (this.pos.y - mY) ** 2 <= this.rad ** 2;
    if (this.isHover) {
      this.isDragging = true;
      this.draggingOffset = createVector(this.pos.x - mX, this.pos.y - mY);
    }
  }

  mouseDragged(mX, mY) {
    if (this.isDragging) {
      this.pos.x = mX + this.draggingOffset.x;
      this.pos.y = mY + this.draggingOffset.y;
    }
  }

  mouseReleased() {
    this.isDragging = false;
  }
}
