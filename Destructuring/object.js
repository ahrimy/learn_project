let obj = {
  name: 'ahrim',
  address: 'Korea',
  age: 10,
};

let { name, age } = obj;
console.log(name, age);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);
