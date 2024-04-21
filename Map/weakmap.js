// map & WeakMap
// Array -> set, Object -> map

// map은 key/value 구조

let wm = new WeakMap();
let myfun = function(){};
// 이 함수가 얼마나 실행됐지? 를 알려고 할때.

wm.set(myfun, 0);

console.log(wm);

let count = 0;
for(let i=0;i<10;i++) {
    count = wm.get(myfun); // get value
    count++;
    wm.set(myfun, count);
}
console.log(wm.get(myfun));
console.log(wm.has(myfun));

myfun = null;
console.log(wm.get(myfun));
console.log(wm.has(myfun));
