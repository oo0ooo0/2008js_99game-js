// import './styles.css';

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

for (var word = 'game'; true; ) {
  var answer = prompt(word);
  if (word[word.length - 1] === answer[0]) {
    //맞았을때
    alert('딩동댕 🤗𐐄');
    word = answer;
  } else {
    alert('땡! 😱X');
    //틀렸을때
  }
}
