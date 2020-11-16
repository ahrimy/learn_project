interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
const seho: User = {
    age: 33,
    name: "세호",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user)
}
const capt = {
    name: "캡틴",
    age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunction {
    (a: number, b: number): number
}

var sum: sumFunction;
sum = function (a: number, b: number): number {
    return a + b;
}