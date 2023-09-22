let userName = prompt('당신의 이름은?''이서율');
let isUserNameCorrect =confirm ('당신의 이름이'+userName+'이 맞습니까?')
if isUserNameCorrect ==true{
  document.getElementById('user-name-goes-here').textContent =
  '환영해요' + userName + '님';
}