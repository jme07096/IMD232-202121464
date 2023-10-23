// let particle;
let particleArray = [];
let gravity = 0;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);

  // particle = new Particle(width / 2, 20);
  gravity = createVector(0, 0.1);

  background(255);
}

function draw() {
  particleArray.push(new Particle(width / 2, 20));

  background(255);
  for (let a = 0; a < particleArray.length; a++) {
    //a++는 1을 더하는 것이다.
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
//step2 Array를 이용해 파티클 만들기
//particleAray를 만들고 , push 넣어 새로운 파티클(파티클 추가 구문)을 만들어 준다.
// for 구문을 이용해준다.
//particleArray[a].applyForce(gravity);를 만들어준 뒤. a 정의..
//업데이트, 디스플레이에도 같은 구문을 넣어준다.
// -- 이 단계까지는 파티클 실행이 가능하기는 하나,
//콘솔로그로보면 console.log(particleArray.length); 점점 갯수가 많아지면서 오류가 날 수 있다.--
// 그래서  for (let a = 0; a < 8000; a++) 파티클 어레이를 8000개로 만들어준다.
