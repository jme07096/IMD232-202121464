class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 3.35);
    // this.vel.rotate((TAU / 360) * random( -150,-30));
    this.acc = createVector(0, 0);
    this.rad = 8;
    this.lifeSpan = 255;
    // 색 지정해주기
    this.color = color(random(230), random(310), random(310), 18000);

    //랜덤 방향 만들어주기
    this.rA = random(360);
    this.rB = random(-0.1, 0);
  }

  applyForce(force) {
    //더하기
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //초기화
    this.lifeSpan -= 2;

    this.rA += this.rB;
  }

  display() {
    noStroke();
    fill(this.color);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rA);
    rectMode(CENTER); //중앙으로
    rect(0, 0, this.rad * 2, this.rad * 2);
    pop(); //복원
  }

  isDead() {
    return this.lifeSpan < 0;
  }
}
//lifeSpan의 값을 주고, -=2로 감소시켜 ,isDead의 return을 사용해 0이하가 되면 죽고, 반복되도록 만들어 준다.
