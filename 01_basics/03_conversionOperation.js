let score = "33abc";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1 ; fasle => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);


// 1 => true; 0 => false
// "" => false
// "MK" => true


let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof (stringNumber));

//***************   Operations   **************


let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);

let str1 = "Hello";
let str2 = "MK";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log("1" + 2 + 2); //output = 122; because 1st value is string.
console.log(1 + 2 + "2"); //output = 32; beacuse 1st value is number.

console.log(true);


let num1, num2, num3;

let gameCounter = 100;
gameCounter++; // postfix
++gameCounter; //prefix
console.log(gameCounter);









