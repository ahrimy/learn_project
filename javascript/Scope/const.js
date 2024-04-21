function home() {
  var homename = 'my house';
  homename = 'your house';
  console.log(homename);
}

//homename을 var가 아닌 const로 선언하면 변수값을 변경할 수 없다.
//이전에는 변수명을 대문자로 선언하여 변경하지 않도록 약속처럼 사용했다.
//const를 사용하면 문법적으로 변경 불가능 하다.
//const를 기본으로 사용한다.
//변경이 될 수 있는 변수는 let을 사용한다.
//var는 사용하지 않는다.

home();

function list() {
  const list = ['apple', 'orange', 'watermelon'];
  //   list = 'sdsdf'; //error
  list.push('banana');
  console.log(list);
}

//const를 사용하더라고 배열과 오브젝트의 값을 변경하는 것은 가능하다.
//const는 값을 재할당하는 것을 제한한다.

list();

//immutable array
//뒤로가기, 앞으로가기
//원본을 바꾸지 않고 새로운 배열로 복사해서 만듬
const list2 = ['apple', 'orange', 'watermelon'];
list3 = [].concat(list2, 'banana');
console.log(list2 === list3);
