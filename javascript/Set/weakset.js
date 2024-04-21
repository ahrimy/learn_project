// weakset
// 참조를 가지고 있는 객체만 저장이 가능하다
// 객체 형태를 중복없이 저장하려고 할때 유용하다.

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
// invalid type
// ws.add(111);
// ws.add("111");
// ws.add(null);
ws.add(arr2);
ws.add(obj);
ws.add(function(){});

// 객체가 null 이 되거나 필요가 없어지면
// garbage collection 의 대상이 된다.
// 그러면 weakset 에서도 사라진다

arr = null;
console.log(ws.has(arr), ws.has(arr2));

console.log(ws);