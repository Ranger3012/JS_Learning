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