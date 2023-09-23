// let x;
// let y;
let pos;
// let xAdd = 5;
// let yAdd = 3;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
  //  //초기값 할당
  //   x = width / 2;
  //   y = height / 2;
  pos = createVector(width / 2, height / 2);
  vel = createVector(5, 3);
}
function draw() {
  background('white');
  //   //1.변수 : 위치 업데이트
  //   x += xAdd;
  //   y += yAdd;
  // 2. 백터 : 초기값 할당
  //pos.x += vel.x; pos.y += vel.y;
  pos.add(vel);

  //   //화면 밖으로 나가면 다시 화면 안으로 들이기
  //   if (x < 0) {
  //     x += width;
  //   } else if (x >= width) {
  //     x -= width;
  //   }
  //   if (y < 0) {
  //     y += height;
  //   } else if (x >= height) {
  //     y -= height;
  //   }

  //   //2. 백터 : 화면 밖으로 나가면 다시 화면 안으로 들이기
  if (pos.x < 0) {
    pos.x += width;
  } else if (pos.x >= width) {
    pos.x -= width;
  }
  if (pos.y < 0) {
    pos.y += height;
  } else if (pos.y >= height) {
    pos.y -= height;
  }
  //화면 밖으로 나가면 다시 화면 안으로 들이기
  //   ellipse(x, y, 2 * radius);
  //2.백터 :  화면 밖으로 나가면 다시 화면 안으로 들이기
  ellipse(pos.x, pos.y, 2 * radius);
}
