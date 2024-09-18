const userEmail = "mk@code.mk"

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

//falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
//"0", 'false', " ", [], {}, function(){}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}



// nullish coalescing operator (??): null undefined

let val1, val2, val3, val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 25 ?? 35

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator
// condition ? ture : false

const iceTeaPrice = 10
iceTeaPrice <= 5 ? console.log("Less than 5") : console.log("More than 5");