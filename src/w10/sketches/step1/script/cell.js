class Cell {
  constructor(X, Y, W, H, state) {
    this.X = X;
    this.Y = Y;
    this.W = W;
    this.H = H;
    this.state = false; // 크고 키는 ..
  }

  display() {
    push();
    translate(this.X, this.Y);
    if (this.state) {
      fill(32);
    } else {
      fill(255);
    }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.W, this.H);
    pop();
  }
}
