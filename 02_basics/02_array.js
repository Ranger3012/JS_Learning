const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman" , "flash"];

marvel_heros.push(dc_heros); // it will add dc_heros as array element.
console.log(marvel_heros);
console.log(marvel_heros[3]); // dc_heros is 3rd element.

marvel_heros.pop();
console.log(marvel_heros);

all_heros = marvel_heros.concat(dc_heros); // it will add each element from dc_heros to marvel_heros.[only new array, instead of updating marvel_heros]
console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const useable_another_array = another_array.flat(Infinity);
console.log(useable_another_array);

console.log(Array.isArray("MK"));
console.log(Array.from("MK"));
console.log(Array.from({name: "MK"})); //output is empty array because we have to tell it to make array from key or value.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));