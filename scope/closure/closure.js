var list = document.querySelectorAll('li');
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    //callback 함수
    //i 값을 callback 밖의 변수를 참조한다.
    //i 값은 closure 변수
    //i 를 var가 아닌 let으로 선언하면 block scope가 되기때문에,
    //callback함수가 선언된 순간의 i 값을 기억하고 있다.

    console.log(i + '번째 리스트 입니다.');
  });
}
