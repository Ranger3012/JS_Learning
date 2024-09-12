const gitUser = new Object()
const JsUser = {} //right now gitUser and JsUser both are empty objects.

console.log(gitUser);
console.log(JsUser);

gitUser.id = "123abc";
gitUser.name = "MK";
gitUser.isLoggedIn = true;
console.log(gitUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            //you can do nesting in object
            firstname : "MK",
            lastname : "coder"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.lastname);

console.log(regularUser.fullname?.userfullname.lastname); //if username exist then provide it.

const obj1 = {1:"M", 2 :"K"};
const obj2 = {1:"M", 2 :"K"};

const obj3 = {obj1,obj2};
console.log(obj3);

const obj4 = Object.assign({},obj1,obj2); //we use {} for 1st as empty object. then its adding obj1 and obj2 to this empty object.(good way to write code).
console.log(obj4);
