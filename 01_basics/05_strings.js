const name = "MK";
const repoCount = 50;

console.log(name + repoCount + "Value."); //bad structre. now, have new way to write it.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //we have used ` not ' this.

const gameName = new String('MK-Developer');

console.log(gameName[0]); //output => 'M'
console.log(gameName.__proto__);

console.log(gameName.length); //output => 11
console.log(gameName.toUpperCase()); //output =>MKDEVELOPER , and it did not change original Value.

console.log(gameName.charAt(1)); //output => 'K'
console.log(gameName.indexOf('M')); //output => 0

const newString = gameName.substring(0,2);
console.log(newString); //output => 'MK', will not include 2 index. 

const anotherString = gameName.slice(-2,0);
console.log(anotherString); //output will give you from reverse index but, print "evelop"

const newStringOne = "   MKWebDEv   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // will trim white spaces.

const url = "https://mkdeveloper.com/mk%20developer";
console.log(url.replace('%20','-'));

console.log(url.includes('MK')); //output => True.

console.log(gameName.split("-")); //seprate gameName based on "-"


