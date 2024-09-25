const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNumbers = myNumbers.map( (num) => num + 10)
console.log(newNumbers); // outout is in array form

const newNumbers2 = myNumbers.forEach( (num) => {
    console.log(num + 10); // output is in listed 
});


// chaining

const newNumbers3 = myNumbers
                    .map( (num) => num  * 10 )
                    .map( (num) => num + 1 )
console.log(newNumbers3);

const newNumbers4 = myNumbers
                    .map( (num) => num  * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40)
console.log(newNumbers4);
