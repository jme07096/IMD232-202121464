let cam;

function setup() {
  setCanvasContainer('canvers', 3, 2, true);
  //   createCanvas(800, 300);
  cam = createCapture(VIDEO);
  //   cam.size(320, 480);
  cam.hide();
  console.log(cam);
  noLoop();
}

function draw() {
  background('white');
  //   image(cam, 0, 0, width, (cam.width / width) * height);
  image(cam, 0, 0, width, (cam.height / cam.width) * width);
  cam.poadPixels('width', cam.width);
  cam.poadPixels('height', cam.height);
  cam.poadPixels('pixel', cam.pixels[0]);
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.widtj; x++) {
      const idx = cam.width * y + x;
      const color = cam.pixels[idx];
      const brightness = brightness(color);
      ellipse(x, y, (brightness / 255) * 20);
      // cam.pixels[idx];
    }
  }
}
// 지금 현재의 픽셀상태
