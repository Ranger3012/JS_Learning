// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; //number
const scoreValue = 100.2; //number

const isLoggedIn = true; //boolean
const outsideTemp = null; //null
let userEmail; // undefined

const id=Symbol('123'); //symbol
const anotherId = Symbol('123'); // symbol 

console.log(id === anotherId); // output => False; it's not same.
const bigNumber = 231214148798n //bigInt


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman","ironman"]
let myobj = {
    name: "MK",
    age:26,
}                   //object (inside curly braces, it's all object)


// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "MKWebDeveloper";

let anotherName = myYoutubeName;
anotherName = "MKSoftwareDeveloper"
console.log(myYoutubeName);
console.log(anotherName); //it's stack memory. So, it gives copy to anotherName, that's why it didn't change myYoutubeName. and only changed anotherName.


let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "user@yahoo.com"
console.log(userOne.email);
console.log(userTwo.email); //it's heap memory, both userOne and userTwo has same reference. that's why it changed email for userOne and userTwo.