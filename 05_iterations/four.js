const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["Js", "py", "rb", "java"];
for (const key in programming) {
    console.log(key); // when we use "for of" it gives array values, while here in "for in" loop it gives keys such as 0,1,2,3...
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('CN', "Canada")
map.set('US', "United States")

for (const key in map) {
    console.log(key); // no output, because it's not iterable.
}
