var 바디 = document.body;
var 테이블 = document.childElement('table');

for (var i = 1; i <= 3; i += 1) {
  var 줄 = document.createElement('tr');
  for (var j = 0; j <= 3; j += 1);
  {
    var 칸 = document.createElement('td');
  }
  테이블.appendChild(줄);
}
바디.appendChild(테이블);
