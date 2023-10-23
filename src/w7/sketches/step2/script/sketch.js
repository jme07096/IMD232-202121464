let vehicle;
let mVec;
let debug = true;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

  colorMode(HSL, 360, 100, 100, 100);

  vehicle = new Vehicle(width / 2, height / 2, 16, 5, 0.1, color(330, 100, 50));
  mVec = createVector();

  colorMode(RGB, 255, 255, 255);
  background(255);
}

function draw() {
  background(255);
  mVec.set(mouseX, mouseY);
  vehicle.seek(mVec);
  vehicle.update();
  vehicle.display();
}
//hsl 기준으로 0,100,100이 흰색 배경//for (let n = 0; n<20;n++){
//traffic.addVechicle(radom(width),random(height)) 에서 20이 갯수
//**2 는 제곱이다.
