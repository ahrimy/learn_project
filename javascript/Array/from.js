//ES2015 from method

function addMark() {
  let newData = [];

  //arguments가 인자값을 읽어옴
  //가변적인 parameter가 들어오는 경우에 사용
  //권장하지는 않음
  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + '!');
  }
  console.log(newData);

  //arguments는 배열의 형태이지만 배열이 아님
  //map을 바로 사용할 수 없음
  //배열로 바꿔줘야됨
  let newArray = Array.from(arguments);
  let newDataMap = newArray.map(function (value) {
    return value + '!';
  });
  console.log(newDataMap);
}

addMark(1, 2, 3, 4, 5);
