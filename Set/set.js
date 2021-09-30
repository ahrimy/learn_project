let mySet = new Set();
console.log(toString.call(mySet));

//set: 중복없이 유일한 값을 저장하려고 할때. 이미 존재하는지 체크할 때 유용

mySet.add("crong");
mySet.add("harry");
mySet.add("crong");

console.log(mySet.has("crong"));
mySet.delete("crong");

mySet.forEach(function(v) {
    console.log(v);
});