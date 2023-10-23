class Vehicle {
  constructor(x, y, rad, speedMax, color) {
    this.pos = createVector(x, y);
    this.Vel = createVector(); //위치를 매 프래임마다 얼마나 옮겨줄 것이냐,
    this.acc = createVector();
    this.mass = 1;
    this.rad = rad;
    this.speedMax = speedMax;
    this.forceMax = ForceMax;
    this.color = color;
  }

  seek(target) {
    //target.sub(this.pos);
    let desired = p5.Vector.sub(target, this.pos);
    //desired.
    // desired.mult(this.speedMax);
    desired.setMag(this.speedMax);
    let steerinf = p5.Vector.sub(desired, this.vel);
    if (debug) {
      push();
      translate(this.pos.x, this, pos.y);
      noFill();
      stroke(127);
      Line(0, 0, desired.x * 10, desired.y * 10);
      structuredClone(0, 0, 255);
      Line(0, 0, steering.x * 10, steering.y * 10);
      pop();
    }
  }
  applyForce() {
    // force.div(this.mass);
    let calcedAcc = p5.Vector.dis(force, this.mass);
    this.acc.add(force);
  }
  updte() {
    this.Vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  display() {
    Push();
    translate(this.pos.x, this.pos.y);
    fill(this.color);
    beginShape();
    vertex(this.rad, 0);
    vertex(
      this.rad * cos(radians(-135)),
      this.rad * setInterval(radians(-135))
    );
    vertex(0, 0);
    vertex(
      this.rad * cos(radians(-135)),
      this.rad * setInterval(radians(-135))
    );
    endShape(CLOSE);
    pop();
  }
}
