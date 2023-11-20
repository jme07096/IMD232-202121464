// 변수 생성
const {
  Engine,
  Render,
  Runner,
  Body: MatterBody,
  Composite,
  Composites,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
  Common,
  Vertices,
} = Matter;

// 디컴프 만들기
Common.setDecomp(decomp);

// 엔진 만들기
const engine = Engine.create(),
  world = engine.world;

//러너 만들기
const runner = Runner.create();
Runner.run(runner, engine);
//로프 3개, 마우스, 캔버스 사이즈  변수 생성
let ropeA;
let ropeB;
let ropeC;

let mouse;

let canvasH = 600;
let canvasW = 800;

function setup() {
  setCanvasContainer('canvas', canvasW, canvasH, true);
  background('#483D8B');

  // 도형 만들기
  const Mountain = [
    { x: 48, y: 10 },
    { x: 8, y: 12 },
    { x: 19.5, y: 38.5 },
    { x: 29.5, y: 27 },
    { x: 40, y: 37.5 },
  ];

  const Stars = [
    { x: 0, y: -25 },
    { x: 7, y: -10 },
    { x: 23, y: -8 },
    { x: 12, y: 3 },
    { x: 15, y: 20 },
    { x: 0, y: 12 },
    { x: -15, y: 20 },
    { x: -12, y: 3 },
    { x: -23, y: -8 },
    { x: -7, y: -10 },
  ];
  const Heart = [
    { x: 0, y: 0 },
    { x: 10, y: -6 },
    { x: 20, y: -16 },
    { x: 30, y: -24 },
    { x: 40, y: -16 },
    { x: 50, y: -6 },
    { x: 60, y: 0 },
    { x: 30, y: 30 },
    { x: 0, y: 0 },
  ];

  //랜덤으로 도형의 모양 변형
  const RandomP = (vertices) => {
    return vertices.map((vertex) => ({
      x: vertex.x + Math.random() * 10 - 5,
      y: vertex.y + Math.random() * 10 - 5,
    }));
  };

  // 모양 형태 분해하기
  const Body1 = decomp.quickDecomp(Mountain);
  const Body2 = decomp.quickDecomp(Stars);
  const Body3 = decomp.quickDecomp(Heart);
  group = MatterBody.nextGroup(true);

  //루프A 설정하기
  ropeA = Composites.stack(80, 50, 8, 1, 10, 8, function (x, y) {
    return Bodies.fromVertices(x, y, RandomP(Mountain), {
      collisionFilter: { group: group },
    });
  });
  Composites.chain(ropeA, 0.5, 0, -0.5, 0, {
    stiffness: 0.5,
    length: 6,
    render: { type: 'line' },
  });

  Composite.add(
    ropeA,
    Constraint.create({
      bodyB: ropeA.bodies[0],
      pointB: { x: -25, y: 0 },
      pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
      stiffness: 0.7,
    })
  );

  //충돌 시 서로 영향을 미치지 않도록 해주기
  group = MatterBody.nextGroup(true);

  //루프B 설정하기
  ropeB = Composites.stack(350, 50, 10, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, RandomP(Stars), {
      collisionFilter: { group: group },
    });
  });

  Composites.chain(ropeB, 0.5, 0, -0.25, 0, {
    stiffness: 0.3,
    length: 7,
    render: { type: 'line' },
  });

  Composite.add(
    ropeB,
    Constraint.create({
      bodyB: ropeB.bodies[0],
      pointB: { x: -10, y: 0 },
      pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
      stiffness: 0.5,
    })
  );

  //충돌 시 서로 영향을 미치지 않도록 해주기
  group = MatterBody.nextGroup(true);

  //루프C 설정하기
  ropeC = Composites.stack(600, 50, 13, 1, 10, 10, function (x, y) {
    return Bodies.fromVertices(x - 20, y, RandomP(Heart), {
      collisionFilter: { group: group },
      chamfer: 5,
    });
  });

  Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });

  Composite.add(
    ropeC,
    Constraint.create({
      bodyB: ropeC.bodies[0],
      pointB: { x: -20, y: 0 },
      pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
      stiffness: 0.7,
    })
  );

  // 마우스 추가하기
  mouse = Mouse.create(document.querySelector('.p5Canvas'));
  mouse.pixelRatio = (pixelDensity() * width) / canvasW;
  let mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.1,
    },
  });

  //로프 추가하기
  Composite.add(world, [
    ropeA,
    ropeB,
    ropeC,
    Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true }),
  ]);

  Composite.add(world, mouseConstraint);
  Runner.run(runner, engine);
}

function draw() {
  //배경, 컬러 설정
  background('#483D8B');
  colorMode(HSL);

  //선,색 채우기,대상설정
  // Mountain 그리기
  stroke('#7FFF00');
  fill('#7FFF00');
  drawParts(ropeA);

  // Stars 그리기
  stroke('#FF1493');
  fill('#FF1493');
  drawParts(ropeB);

  // Heart 그리기
  stroke('#FFFF00');
  fill('#FFFF00');
  drawParts(ropeC);

  mouse.pixelRatio = (pixelDensity() * width) / canvasW;
  console.log('length', ropeC.bodies[1].parts.length);
}

//모양 형태 그리기
function drawParts(rope) {
  rope.bodies.forEach((eachBody) => {
    eachBody.parts.forEach((eachPart, idx) => {
      if (idx === 0) return;
      beginShape();
      eachPart.vertices.forEach((eachVertex) => {
        vertex(
          (eachVertex.x / canvasW) * width,
          (eachVertex.y / canvasH) * height
        );
      });
      endShape(CLOSE);
    });
  });
}
