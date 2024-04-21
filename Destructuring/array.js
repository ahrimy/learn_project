//Destructuring

let data = ['a', 'b', 'c', 'd'];
/*
let myname = data[0];
let yourname = data[1];
*/

let [myname, , yourname] = data;
console.log(myname, yourname);
