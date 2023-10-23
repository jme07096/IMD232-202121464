let Vehicle;
let mVec;
let debug = true;
function setup() {
  seCanvasContainer('canvas', 3, 2, true);
  colorMode(HSL, 360, 100, 100, 100);

  Vehicle = new Vehicle(width / 2, height / 2, 5, color(330, 100, 50));
  mVec = createVector();

  colorMode(RGB, 255, 255, 255);
  background(255);
}

function draw() {
  background(255);
  mVec.set(mouseX, mouseY);
  Vehicle.seek(mVec);
  Vehicle.update();
  Vehicle.display();
}
