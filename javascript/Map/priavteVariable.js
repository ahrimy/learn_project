// WeakMap 활용

// 외부에서 height, width 변수에 접근 가능
// function Area(height, width) {
//     this.height = height;
//     this.width = width;
// }

// Area.prototype.getArea = function(){
//     return this.height * this.width;
// }

// 변수 접근을 막고 싶다면?
// weakmap 을 사용한다.
const wm = new WeakMap();

function Area(height, width) {
    wm.set(this, {height, width});
}

Area.prototype.getArea = function(){
    const {height, width} = wm.get(this);
    return height * width;
}


let myarea = new Area(10, 20);
let myarea2 = new Area(20, 30);
console.log(myarea.getArea());
console.log(myarea2.getArea());
console.log(myarea.height); 

console.log(wm.has(myarea));
myarea = null;
console.log(wm.has(myarea));