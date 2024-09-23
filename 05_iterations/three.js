// for of

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello MK"
for (const greet of greetings) {
    console.log(`Each code is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('CN', "Canada")
map.set('USA', "United States of America") // only unique key=>value, no duplicate.

console.log(map);

for (const key of map) {
    console.log(key);
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'GTA'
}

//for (const [key, value] of myObj) {
  //  console.log();
//}  can't iterate object using for-of

