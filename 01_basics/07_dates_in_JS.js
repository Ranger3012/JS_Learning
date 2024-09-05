// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 1, 27);
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

let anotherDate = new Date("2024-03-22");
console.log(anotherDate);

let myTimeStamp = new Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate);
console.log(newDate.getDay);
console.log(newDate.getMonth);

// '${newDate.getDay()} and the Time '

newDate.toLocaleString('default',{
    weekday: "long" 
})