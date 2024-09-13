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

const obj5 = {...obj1, ...obj2}; //regular coder use this spread method to combine.
console.log(obj5);


const users = [
    {
        id:1,
        email:"MKCODER@gmail.com"
    },
    {

    },
    {

    }
]// array with lots of object

users[1].email
console.log(gitUser);

console.log(Object.keys(gitUser));
console.log(Object.values(gitUser));
console.log(Object.entries(gitUser));

console.log(gitUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "Js course",
    price: "10",
    courseInstructor: "MK"
}

//course.courseInstructor

const {courseInstructor: teacher} = course; //clean code //de-structure
console.log(teacher); // i can use teacher insted of courseInstructor

//{
  //  "name": "MK",
    //"courseName": "JS",
    //"price": "free"
//}  //JSON looklike this (API)

[
    {},
    {},
    {}
] //API sometimes looklike this