let cells = [];

const colNum = 10,
  rowNum = colNum;

let W, H;

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  W = width / colNum;
  H = height / rowNum;

  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      const X = W * col;
      const Y = W * row;
      //   let state;
      //   if (random() < 0.5) {
      //     state = false;
      //   } else {
      //     state = true;
      //   }
      let state = random() < 0.5;
      cells.push(new cells(X, Y, W, H, state));
    }
  }

  background('white');
}

function draw() {
  background('white');
  cells.forEach((eachCell) => {
    eachCell.display();
  });
}
