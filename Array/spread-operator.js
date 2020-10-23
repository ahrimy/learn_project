//spread operator 펼침연산자

//배열의 복사
let pre = ['apple', 'orange', 100];
let newData = [...pre];
console.log(pre, newData);
console.log(pre === newData);

//활용
let arr1 = [100, 200, 'hello', null];
let arr2 = [0, 1, 2, 3, ...arr1, 4];
console.log(arr2);

function sum(a, b, c) {
  return a + b + c;
}
let arr3 = [100, 200, 300];
//spread operator 사용 안하면
console.log(sum.apply(null, arr3));
//spread operator 사용
console.log(sum(...arr3));
