const user = {
    username: "MK Coder",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`);
    }

}

user.welcomeMsg();

user.username = "coder";
user.welcomeMsg(); // because we change context(value).

console.log(this); //return empty object, because nothing in global enviroment.

function chai(){
    let username1 = "MK";
    console.log(this.username1);
}
chai()


const chai2 = () => { //arrow function
    let username2 = "MK";
    console.log(this.username2);
}
chai2()


const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,4));

const addThree = (num1,num2) => num1 + num2  //implicite return // if we use {} then have to use return
console.log(addThree(4,7));

const addFour = (num1, num2) => ({username4 : "MK_Coder"}) // to return object implicitly you must put it in ()