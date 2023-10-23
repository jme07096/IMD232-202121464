class Emitter {
  constructor(x, y) {
    this.particles = [];
    this.pos = createVector(x, y);
  }

  addParticle() {
    this.particles.push(
      new Particle(this.pos.x, this.pos.y, random(1, 16), random(180, 300))
    );
  }

  applyGravity(gravity) {
    for (let eachParticle of this.particles) {
      const force = p5.Vector.mult(gravity, eachParticle.mass);
      eachParticle.applyForce(force);
    }
  }

  applyRepeller(repeller) {
    this.particles.forEach((eachParticle, idx) => {
      const force = repeller.repel(eachParticle);
      eachParticle.applyForce(force);
    });
  }

  update() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].isDead()) {
        this.particles.splice(i, 1);
        //스플라이스는 해당하는것을 지우고 당겨 번호를 다시 매겨주는것.
        //쓰는 이유는 어레이를 하다가 중간에 빼먹는 위치(순서)의 오류를 고치기 위해
      }
    }
  }

  display() {
    // for (let i = 0; i < this.particles.length; i++) {
    //   this.particles[i].display();
    // }
    this.particles.forEach((eachParticle) => {
      eachParticle.display();
    });
  }
}
