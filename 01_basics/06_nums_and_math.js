
const score = 100;

const balance = new Number(90000)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));  //fixed it 90000.00


const otherNumber = 23.8999
console.log(otherNumber.toPrecision(3)); // output => 23.9 (careful while using it)

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //convert to indian standard type output => 10,00,000

////++++++++++++ Maths +++++++++++++++++++////

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.8));


console.log(Math.min(4,5,2,8));
console.log(Math.max(4,9,7,3,));

console.log(Math.random()); // give us value between 0 to 1

console.log(Math.random()*10 +1); // it will give you minimum value 1

console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random( ) * (max-min + 1)) + min);



