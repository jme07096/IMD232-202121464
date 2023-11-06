class Vehicle {
  //클래스 만들기(객체를 생성하고, 제어하기)
  constructor(x, y, mass, rad, speedMx, forceMx, color) {
    //객체 정의해주기
    this.pos = createVector(x, y); //객체 위치 설정
    this.vel = p5.Vector.random2D(); // 랜덤 2D로 객체 초기 속도 설정
    this.acc = createVector(); // 초기 가속도 0으로 설정
    this.mass = mass; //질량 설정
    this.rad = rad; //반지름 설정
    this.speedMx = speedMx; //최대 스피드 설정
    this.forceMx = forceMx; //최대 힘 설정
    this.neighborhooodRad = 50; //객체와 맞닿을 다른 객체와의 반경 설정
    this.color = color; //컬러 설정
  }

  cohesion(others) {
    //인접한 객체와 가까이 모이는 역할
    let cnt = 0; //cnt변수 선언,초기값 0,(인접한 객체수)
    const steer = createVector(0, 0); //새로운 방향 백터 만들기
    others.forEach((each) => {
      if (each !== this) {
        //현재 객체와 같은 객체를 제외하기위한 조건문.(조건 부정)

        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2;
        if (distSq < this.neighborhooodRad ** 2) {
          //다른 객체가  현재 객체와 일정 반경 내에 있는지를 판단.
          steer.add(each.pos); // 반경안에 있으면 다른 방향으로 가도록조정.(위치더하기)
          cnt++; //인접한 객체의 수를 증가
        }
      }
    });
    if (cnt > 0) {
      // 만약 인접한 객체가 0 이상이면.
      steer.div(cnt); // 인접한 객체수 나누기
      steer.sub(this.pos); //  위치 빼기
      steer.setMag(this.speedMx); //최대속도백터의 길이(크기)
      steer.sub(this.vel); // 속도 빼기
      steer.limit(this.forceMx); //최대 힘 제한하기
    }
    return steer; // 반환하기.
  }

  align(others) {
    // 객체들이 비슷한 속도로 움직일 수 있도록 하는역할
    let cnt = 0; //cnt변수 선언,초기값 0,
    const steer = createVector(0, 0); //새로운 방향 백터 만들기
    others.forEach((each) => {
      if (each !== this) {
        //현재 객체와 같은 객체를 제외하기위한 조건문.(조건 부정)
        const distSq =
          (this.pos.x - each.pos.x) ** 2 + (this.pos.y - each.pos.y) ** 2; // 현재 객체와 주변 객체 간의 거리 제곱을 계산
        if (distSq < this.neighborhooodRad ** 2) {
          // 주변 객체 반경 내에 있는 경우
          steer.add(each.vel); //주변 객체와 함께 일정한 방향으로 이동(속도 더하기)
          //   steer.add(p5.Vector.normalize(each.vel));
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      // 만약 인접한 객체가 0 이상이면.
      steer.div(cnt); //인접한 객체 수 나누기
      steer.setMag(this.speedMx); // 최대속도 백터의 길이 (크기)
      steer.sub(this.vel); //속도 빼기
      steer.limit(this.forceMx); //최대 힘 제한하기
    }
    return steer; //반환하기.
  }

  separate(others) {
    // 충돌을 피하고 개별적으로 움직이게하는 역할
    let cnt = 0;
    const steer = createVector(0, 0); //steer 백터 생성
    others.forEach((each) => {
      if (each !== this) {
        const dist = this.pos.dist(each.pos); //두개의 객체 사이의 거리측정
        if (dist > 0 && this.rad + each.rad > dist) {
          //두 객체간의 거리가 0보다 크고 두 객체의 반지름 합보다 작은 경우.
          const distNormal = dist / (this.rad + each.rad); //`distNormal`은 두 객체 사이의 거리를 두 객체의 반지름 합으로 나눈것.
          const towardMeVec = p5.Vector.sub(this.pos, each.pos); // `towardMeVec`는 다른 객체로 향하는 방향으로,
          // 하나의 객체(this)의 위치에서 다른 객체(each)의 위치를 뺀 차이 백터이다.
          towardMeVec.setMag(1 / distNormal); // 방향 벡터의 크기를 조절하여 겹치지 않도록 함
          steer.add(towardMeVec); //steer에 towardMeVec를 더하기
          cnt++;
        }
      }
    });
    if (cnt > 0) {
      //만약 인접한 객체가 0이상이라면
      steer.div(cnt); //steer에 인접한 객체 수 나누기
      steer.setMag(this.speedMx); //최대속도 백터의 길이
      steer.sub(this.vel); //속도 빼기
      steer.limit(this.forceMx); //최대 힘 제한하기
    }
    return steer; // 반환하기.
  }

  applyForce(force) {
    const forceDivedByMass = p5.Vector.div(force, this.mass);
    this.acc.add(forceDivedByMass); //가속도 더하기
  } //외부에서주어진 힘 적용.

  update() {
    this.vel.add(this.acc); //속도에 가속도 더하기
    this.vel.limit(this.speedMx); //속도를 최대속도로 제한
    this.pos.add(this.vel); //위치에 속도 더하기
    this.acc.mult(0); //가속도 초기화
  }

  borderInfinite() {
    //객체의 위치가 화면밖 경계를 지나가면 반대편으로 이동시켜주는 역할.
    if (this.pos.x < -infiniteOffset) {
      this.pos.x = width + infiniteOffset;
    } else if (this.pos.x > width + infiniteOffset) {
      this.pos.x = -infiniteOffset;
    }
    // 만약 객체의 x 좌표가 화면 왼쪽 경계보다 작다면 오른쪽으로 이동.
    // 그렇지 않고 객체의  x 좌표가 화면 오른쪽 경계보다 크다면 왼쪽으로 이동.

    if (this.pos.y < -infiniteOffset) {
      this.pos.y = height + infiniteOffset;
    } else if (this.pos.y > height + infiniteOffset) {
      this.pos.y = -infiniteOffset;
    }
  }
  // 만약 객체의 y 좌표가 화면 위쪽 경계보다 작다면 아래쪽으로 이동.
  //그렇지 않고 객체의 y 좌표가 화면 아래경계보다 크면 화면 위쪽으로 이동.

  // 객체가 화면밖 경계를 넘어가도 화면 반대편에서 나타나  반복되게 함.(조건문)
  // 만약 차량의 x 좌표가 화면 왼쪽 경계(-infiniteOffset)를 벗어나면 오른쪽 경계(width + infiniteOffset)에서 나타남.

  display() {
    push(); //(회전을 위해)
    translate(this.pos.x, this.pos.y); //객체 위치 변환
    rotate(this.vel.heading()); //객체 속도 방향에따라 회전
    noStroke(); //테투리 없음
    fill(this.color); //색 채우기

    beginShape(); //객체 모양 만들기
    vertex(this.rad, 0); //첫 번째 꼭짓점 생성
    vertex(this.rad * cos(radians(-135)), this.rad * sin(radians(-135))); // 객체의 중심에서 radians(-135) 떨어진 위치에 추가.
    vertex(0, 0); //다음 꼭짓점 생성
    vertex(this.rad * cos(radians(135)), this.rad * sin(radians(135))); //객체의 중심에서 radians(135) 떨어진 위치에 추가.
    endShape(CLOSE); //시작과 끝점 연결해서 객체 모양완성.

    // noFill();
    // stroke(0, 0, 60);
    // ellipse(0, 0, 2 * this.rad);
    // stroke(0, 0, 80);
    // ellipse(0, 0, 2 * this.neighborhooodRad);
    pop(); //(회전을 위해)
  }
}
