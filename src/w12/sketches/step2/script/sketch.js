var x = 0;
var y = 0;
var stepSize = 9.0;

var font = 'Diphylleia'; // 폰트 변수 추가

var letters =
  '♱ 안녕하세요!! ♱,마법사 여러분! 당신을 ✦✦ 마법의 할로윈파티에 초대합니다! ✦✦ 신비로운 마법과함께 많은 유령,괴물 친구들이 당신을 기다리고 있어요! 공포스럽고 재미있는 마법의 세계로 당신을 초대합니다!준비가 되었다면, 이곳으로 오세요! 당신이 오길 바라며, - 마법사 ';
var fontSizeMin = 30;
var angleDistortion = 0.0;

var counter = 0;
var backgImg; // 이미지 변수 추가

function preload() {
  backgImg = loadImage('./script/편지.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);

  x = mouseX;
  y = mouseY;

  textFont(font);
  textAlign(LEFT);
  fill(255); // 흰색으로 설정

  drawBackground();
}

function draw() {
  if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
}

function drawBackground() {
  var imgWidth = windowWidth * 0.8; // 이미지 너비를 윈도우의 80%로 설정
  var imgHeight = (backgImg.height * imgWidth) / backgImg.width; // 이미지 비율에 맞게 높이 계산

  var posX = (windowWidth - imgWidth) / 2; // 가로 중앙 정렬을 위한 X 위치 계산
  var posY = (windowHeight - imgHeight) / 2; // 세로 중앙 정렬을 위한 Y 위치 계산

  image(backgImg, posX, posY, imgWidth, imgHeight); // 이미지 그리기
}

function mousePressed() {
  x = mouseX;
  y = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  drawBackground(); // 창 크기가 변경될 때 배경 다시 그리기
}
