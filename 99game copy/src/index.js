// import "./styles.css";

var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

var body = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + ' * ' + String(num2) + '= ?';
document.body.append(word);

//form box
const formBox = document.createElement('form');
document.body.append(formBox);

//game input box
const inputBox = document.createElement('input');
formBox.append(inputBox);

//complete answer button
const btn = document.createElement('button');
btn.textContent = '↪';
formBox.append(btn);

// print the answer check result
const resultWindow = document.createElement('div');
document.body.append(resultWindow);
formBox.addEventListener('submit', function callBack(e) {
  e.preventDefault();
  if (result === Number(inputBox.value)) {
    resultWindow.textContent = '딩동댕 🤗 𐐄';
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    result = num1 * num2;
    word.textContent = String(num1) + ' * ' + String(num2) + '= ?';
    inputBox.value = '';
    inputBox.focus();
  } else {
    resultWindow.textContent = '땡! 😱 X';
    inputBox.value = '';
    inputBox.focus();
  }
});

// var 조건 = true;
//   while (조건) {
//     var 답 = prompt(String(숫자1) + '곱하기' + String(숫자2) + '는?');
//     if (결과 === Number(답)) {
//       alert('🤗𐐄');
//       조건 = false;
//     } else {
//       alert('땡');
//     }
//   }
// }
