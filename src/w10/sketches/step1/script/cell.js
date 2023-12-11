class Cell {
  constructor(x, y, w, h, state) {
    //셀을 만들기 위해 필요한 요소들
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state; //
  }

  display() {
    //그려지도록하기.
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);//검은색
    // } else {
    //   fill(255);//흰색
    // }
    //사각형에 색 입히기
    fill(this.state ? 32 : 255);
    // 만약 참이면 32 아니면 255다. 위에 5줄을 간략하게 바꿔주는 구문.
    rect(0, 0, this.w, this.h);
    pop();
  }
}
