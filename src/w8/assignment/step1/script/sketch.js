let traffic; // 변수만들기
let infiniteOffset = 80; // 값을 80으로 하는 변수 만들기

function setup() {
  //초기설정
  setCanvasContainer('canvas', 3, 2, true); //캔버스
  colorMode(HSL, 360, 100, 60, 200); //컬러모드 설정
  background('lightpink'); //배경컬러 설정
  traffic = new Traffic(); //트래픽 생성
  for (let n = 0; n < 10; n++) {
    traffic.addVehicle(random(width), random(height));
  } // 반복문으로, 트래픽 객체 생성하고, 주어진 너비와 높이 안에서 랜덤으로 생성.
}

function draw() {
  //그래픽 요소설정
  background('lightpink'); //배경컬러 설정
  traffic.run(); //트래픽 실행.
}

function mouseDragged() {
  traffic.addVehicle(mouseX, mouseY);
} //마우스를 누를때마다 위에 공식 에드 비에클이 실행됨.
