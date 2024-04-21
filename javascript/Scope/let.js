var name = 'global var';

function home() {
  var homevar = 'homevar';
  for (var i = 0; i < 100; i++) {}
  console.log(i);
}

//ES6 이전에는 var 만 존재
//var 는 function scope
//위의 코드에서 for,if 문 등의 밖에서 호출할 수 있음
//let 은 block scope
//for,if 문 등의 밖에서 호출하면 error

home();
