var data = [1, 2, undefined, NaN, null, ''];

console.log('[for]');
for (var i = 0; i < data.length; i++) {
  console.log(i);
}

console.log('[forEach]');
data.forEach(function (value) {
  console.log('value is', value);
});

console.log('[for-in]');
Array.prototype.getIndex = function () {};
for (let idx in data) {
  console.log(data[idx]);
}
//for in 의 경우 자기자신의 데이터 이외에 상위의 값을 읽어온다.

console.log('[for-of]');
for (let value of data) {
  console.log(value);
}

var str = 'hello world!!!!';
for (let value of str) {
  console.log(value);
}
//for of는 문자열의 문자를 하나씩 읽어올 수 있다.
