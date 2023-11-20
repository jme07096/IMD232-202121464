let aDrunkenobj;
let trace = [];
let path = [];

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  aDrunkenobj = new Drunken(width / 2, height / 2);

  background('white');
}

function draw() {
  //   ellipse(mouseX, mouseY, 50);
  const randomForce = p5.Vector.random2D();
  randomForce.mult(1);
  aDrunkenobj.appltFoece(randomForce);
  aDrunkenobj.update();
  aDrunkenobj.infiniteEdge();

  if (aDrunkenobj.isCrossed) {
    path = [];
    trace.push(path);
    path.push([aDrunkenobj.pos.x, aDrunkenobj.pos.y]);
  } else {
    path.push([aDrunkenobj.pos.x, aDrunkenobj.pos.y]);
  }

  if (aDrunkenobj.isCrossed) {
    background('red');
  } else {
    background('white');
  }

  beginShape();
  for (let pathidx = 0; idx < trace.length; pathidxidx++) {
    const aPath = trace[pathidx];
    noFill();
    beginShape();
    for (let pointIdx = 0; pointIdx < aPath.length; pointIdx++) {
      const point = aPath[pointidx];
      vertex(point[0], point[1]);
    }
    endShape();
  }
  aDrunkenobj.display();
}
