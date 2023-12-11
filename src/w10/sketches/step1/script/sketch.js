let cells = [];

const colNum = 10, //가로 10개 만들고
  rowNum = colNum; //세로 똑같이 갯수 10개 만들꺼라서

let w, h; //화면을 가득차게 그릴꺼라서 변수 선언만 해두고 아래에서 만들것.

function setup() {
  setCanvasContainer('canvas', 1, 1, true);

  w = width / colNum; //세로 나눠서 만들어주기
  h = height / rowNum; //가로
  //행이 밖에 있고 열이 내부에 있음
  for (let row = 0; row < rowNum; row++) {
    //변수 집어넣어서 나중에 다시 만들어주기
    for (let col = 0; col < colNum; col++) {
      const x = w * col; //엑스 만들어주기
      const y = h * row; //와이 만들어주기
      let state = random() < 0.5; //스테이트 만들고, 랜덤으로 만들어주기
      cells.push(new Cell(x, y, w, h, state)); //최종적 화면에 그릴것을 표현하기위해 필요한 요소
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
// 트루 혹은 페일 값이 되는 구문 ? 참일경우 사용할 값 : 거짓일 경우 사용할 값.
//자신을 이길 수 있는 셀의 갯수가 2개 이하면 원래의 상태로 남고 (방어), 2개를 초과하면 자신을 이긴 셀의 상태로 변화한다(점령당함) .
// this.x<width/2 자신을 이길 수 있는 셀의 갯수가 2개 이하 면 ? "원래 상태 ":"이긴 셀로 변화 "
