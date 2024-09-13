

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
} //scope


//console.log(a); 
//console.log(b);
console.log(c);

function one(){
    const username = "MK";

    function two(){
        const website = "github";
        console.log(username);

    }
    //console.log(website);
    two()
}
one()

if(true){
    const username1 = "MK"
    if (username1 === "MK"){
        const website1 = ' github'
        console.log(username1 + website1);
    }
    //console.log(website1);
}
//console.log(username1);



//+++++++++++++++++++++++ interesting ++++++++++++++++++//

addOne(5)

function addOne(num){
    return num + 1
}


//addTwo(5)
const addTwo = function(num){
    return num + 2
}

addTwo(5)


