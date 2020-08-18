var body = document.body;
var num;
var numArray;

function collectNum() {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numArray = [];
  for (var i = 0; i < 4; i += 1) {
    var numShow = num.slice(Math.floor(Math.random() * 9 - i))[0];
    numArray.push(numShow);
    console.log(`i: ${i}, num:${num}, numShow:${numShow}, numArray:${numArray}`);
  }
}
collectNum();
console.log(numArray);

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
body.append(form);

var inputBox = document.createElement('input');
form.append(inputBox);
inputBox.type = 'text';
inputBox.maxLength = 4;

var btn = document.createElement('button');
btn.textContent = '↪';
form.append(btn);

var numError = 0;

form.addEventListener('submit', function callBack(e) {
  //엔터를 쳤을때

  e.preventDefault();
  var answer = inputBox.value;

  if (answer === numArray.join('')) {
    //답이 맞으면
    result.textContent = '홈런';
    inputBox.value = '';
    inputBox.focus();
    collectNum();
  } else {
    var answerArray = answer.split('');
    var strike = 0;
    var ball = 0;
    numError += 1;
    if (numError > 10) {
      //10번 넘게 틀린경우
      result.textContent = `10번 넘게 틀려서 실패! 답은 ${numArray} !!`;
      inputBox.value = '';
      inputBox.focus();
      collectNum();
      var numError = 0;
    }
    console.log('답이 틀렸다.', answerArray);
    for (var i = 0; i < 3; i += 1) {
      if (Number(answerArray[i]) === numArray[i]) {
        console.log('같은자리인지 확인');
        strike += 1;
      } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
        console.log('겹치는숫자가 있는가?');
        ball = +1;
      }
    }
    result.textContent = `strike :${strike}  /  ball: ${ball}`;
    inputBox.value = '';
    inputBox.focus();
  }
});
