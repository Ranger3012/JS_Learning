console.log("Arrays in JavaScript");


const myArr = [0,3,4,7,8,9];

const myHero = ["Ironman" ,"Thor"];

const myArr1 = new Array(1,2,3,3,4);

console.log(myArr[1]);

//Array methods

myArr.push(6)
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(0)
console.log(myArr);

myArr.shift();
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(7));

const newArr = myArr.join() //convert it to string, will get 0,3,4,7,8,9 insted of [0,3,4,7,8,9]

//slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log("B ",myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3);
console.log("C ",myn2);

