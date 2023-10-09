const bodies = [];
const bodyNum = 30;
const G = 1;

function setup() {
  createCanvas('canvas', 1, 1, true); // 캔버스 생성
  init();
  background(255);
}

function draw() {
  background(255);

  // 물체 간의 중력 상호 작용 계산 및 업데이트
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
  init();
}

function init() {
  bodies.length = 0; // 물체 배열 초기화

  // 무작위로 물체 생성
  for (let i = 0; i < bodyNum; i++) {
    const x = random(width);
    const y = random(height);
    const mass = 16; // 16에서 100 사이의 무작위 질량
    const radius = sqrt(mass) * random(20, 50); // 반지름 계산

    bodies.push(new Body(x, y, mass, radius));
  }
}
