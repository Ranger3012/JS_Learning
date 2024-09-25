const coding = ["js", "ruby", "java", "python"]

const values = coding.forEach( (item) => {
    console.log(item);
})  // forEach don't return value

console.log(values); // op=> undefined

//

const myNums = [1,2,3,4,5,6,7,8,9,10]
let newNums = myNums.filter( (num) => num > 4)
console.log(newNums); // filter can return value

let newNums2 = myNums.filter( (num) => {
    return num < 4
})
console.log(newNums2);

const newNums3 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
})
console.log(newNums3);