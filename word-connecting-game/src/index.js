// import './styles.css';

////////////////////
//////////
//ver1
//////////
////////////////////
/*
var word = 'game';
while (true) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    alert('딩동댕 🤗𐐄');
    word = answer;
  } else {
    alert('땡! 😱X');
    //틀렸을때
  }
}
*/

////////////////////
//////////
//ver2
//////////
////////////////////
var body = document.body;

document.title = 'word connecting game';

//game title
const gameTitle = document.createElement('h1');
gameTitle.textContent = '끝말잇기 (word connecting game)';
document.body.append(gameTitle);

//game info
const gameInfo = document.createElement('p');
const infoKr = "'prompt'와 'if'문을 사용한 끝말잇기 게임.";
const infoEn = "'A game of word connecting' is been made 'input' and 'while' statements.";
gameInfo.innerHTML = infoKr + '<br />' + infoEn;
document.body.append(gameInfo);

//first connecting word
var word = document.createElement('div');
word.textContent = 'jamin';
document.body.append(word);

//form box
const formBox = document.createElement('form');
document.body.append(formBox);

//game input box
const inputBox = document.createElement('input');
formBox.append(inputBox);

//game complete answer button
const btn = document.createElement('button');
btn.textContent = '입력';
formBox.append(btn);

// print the answer check result
const resultWindow = document.createElement('div');
document.body.append(resultWindow);

formBox.addEventListener('submit', function callBack(event) {
  event.preventDefault();
  if (word.textContent[word.textContent.length - 1] === inputBox.value[0]) {
    resultWindow.textContent = '딩동댕 🤗 𐐄';
    word.textContent = inputBox.value;
    inputBox.value = '';
    inputBox.focus();
  } else {
    resultWindow.textContent = '땡! 😱 X';
    inputBox.value = '';
    inputBox.focus();
  }
});
