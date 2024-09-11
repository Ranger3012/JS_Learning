// singleton
// Object.create

// object literals

const mysym = Symbol("key1");

const JsUser = {
    name: "MK_Coder",
    age: 27,
    location: "Toronto",
    email: "mk@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mysym] : "myKey1" //use sysmbol, otherwise it will work as string type
}


myArray = ["m", "k"];
myArray[1] //Access array value



console.log(JsUser.email); //1 method to access object
console.log(JsUser["email"]); //2nd method to access object
console.log(JsUser[mysym]); // access symbol

JsUser.email = "mk@code.com" //value override in object
//Object.freeze(JsUser);
JsUser.email = "mk@QA.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


