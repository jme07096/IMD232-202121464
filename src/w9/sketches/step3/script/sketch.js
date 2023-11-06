var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  Events = Matter.Events,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Body = Matter.Body,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
  world = engine.world;

// create runner
var runner = Runner.create();

function setup() {
  setCanvasContainer('#canvas', 800, 600, true);

  // add bodies
  var ground = Bodies.rectangle(395, 600, 815, 50, {
      isStatic: true, //물체가 고정되게함. //보통 엔진.월드에 기본적으로 중력이 탑재되어있음.
      render: { fillStyle: '#060a19' },
    }),
    rock = Bodies.polygon(170, 450, 8, 20, { density: 0.004 }), //도형 만들기.
    anchor = { x: 170, y: 450 },
    elastic = Constraint.create({
      pointA: anchor,
      bodyB: rock,
      length: 0.01,
      damping: 0.01,
      stiffness: 0.05,
    });

  Runner.run(runner, engine); // setup에서 물체 만들꺼라 위 러너에서 여기로 옮김
  background('white');
}

function draw() {
  background('white');
}

// create renderer
const elem = document.querySelector('#canvas');
var render = Render.create({
  element: elem,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    showAngleIndicator: true,
  },
});

Render.run(render);

var pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, function (x, y) {
  return Bodies.rectangle(x, y, 25, 40);
});

var ground2 = Bodies.rectangle(610, 250, 200, 20, {
  isStatic: true,
  render: { fillStyle: '#060a19' },
});

var pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
  return Bodies.rectangle(x, y, 25, 40);
});

// Events.on(engine, 'afterUpdate', function () {
//   if (
//     mouseConstraint.mouse.button === -1 &&
//     (rock.position.x > 190 || rock.position.y < 430)
//   ) {
//     // Limit maximum speed of current rock.
//     if (Body.getSpeed(rock) > 45) {
//       Body.setSpeed(rock, 45);
//     }

//     // Release current rock and add a new one.
//     rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
//     Composite.add(engine.world, rock);
//     elastic.bodyB = rock;
//   }
// });

Composite.add(world, mouseConstraint);

// keep the mouse in sync with rendering
// render.mouse = mouse;

// // fit the render viewport to the scene
// Render.lookAt(render, {
//   min: { x: 0, y: 0 },
//   max: { x: 800, y: 600 },
// });
