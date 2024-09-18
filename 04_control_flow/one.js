// if(conditions) // >, < , ==, !=, <=, >=

if(true){
    //code will execute
}
if(false){
    //code will not execute
}

const isUserLoggedIn = true;
const temprature = 27

if(isUserLoggedIn){
    
}

if(3!=2){
    //code will execute
}

if(2 == "2"){
    console.log("Executed");
}

if(2 === "2"){  // ===, !==
    //strict type check, so will not execute it.
}

if(temprature > 21){
    console.log("temp is greater than 21.");
}
else{
    console.log("temp is not greater than 21.");
}

const score = 200;
if (score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`);
}

const balance = 101200

if (balance < 10000) console.log("Test"); //inplicit scope

if(balance > 1000){
    console.log("Greater than 1000");
}else if (balance > 5000){
    console.log("Greater than 5000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to do shopping.");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In.");
}