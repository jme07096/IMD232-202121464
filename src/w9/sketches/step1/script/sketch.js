// module aliases
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

// 필수과정 1 - 엔진 만들기
var engine = Engine.create();

let elem = document.querySelector('#canvas');
console.log(elem);

// 필수과정 2 - 렌더러 만들기
var render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: elem.clientWidth,
    height: (elem.clientWidth / 4) * 3,
  },
});

//옵션과정 1 - 물체 만들어주기
var boxA = Bodies.rectangle(400, 200, 80, 80); //x,y, width,height,[options]순
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true }); //중앙을 기준으로 상하 좌우로 커지는 사각형
//isStatis: true는 고정시키는 기능.
// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// 필수과정 3 - 그림그리기
Render.run(render);

// 필수과정 4 - 자동으로 계속 동작하게 해주는 장치만들기
var runner = Runner.create();

// 필수과정 5- 자동 뺑뻉이에게 엔진을 등록해서 실행하게 만듦.
Runner.run(runner, engine);
