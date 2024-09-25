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



const books = [
    { title: 'Book One', genre: 'Fiction', publish : 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish : 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish : 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish : 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish : 2009, edition: 2014},
    { title: 'Book Six', genre: 'Fiction', publish : 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish : 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish : 2011, edition: 2016}
];

const userBooks = books.filter( (bk) => bk.genre === 'Science')
console.log(userBooks);

const userBooks1 = books.filter( (bk) => { return bk.publish >= 2000})
console.log(userBooks1);

let userBooks2 = books.filter( (bk) => {
    return bk.publish >= 1982 && bk.genre === 'Fiction'
})
console.log(userBooks2);