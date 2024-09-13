console.log("M");
console.log("K"); //want to write it 5 times

function sayMyName(){
    console.log("M");
    console.log("K");
}

sayMyName //reference
sayMyName() // () execution

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}
addTwoNumber() //output => NaN
addTwoNumber(3,4) //output=> 7
addTwoNumber(3,"4") // o/p => 34
addTwoNumber(3,"a") // o/p=> 3a

const res = addTwoNumber(3,4);
console.log("Result:", res); //undefined

function anotherNumber(number1, number2){
    let result1 = number1 + number2;
    return result1
}

const result2 = anotherNumber(4,7);
console.log("Result:",result2);

function loginUserMsg(userName){
    if(userName === undefined){
        console.log("Please Enter a User Name.");
        return
    }
    return `${userName} just logged In.`
}
console.log(loginUserMsg("MK_Coder"));
console.log(loginUserMsg(""));
console.log(loginUserMsg());



