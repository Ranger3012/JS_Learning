const coding = ["Js", "ruby", "python", "java"]

coding.forEach( function (item){
    console.log(item);
})

//

coding.forEach( (values) => {
    console.log(values);
})

//

function printMe(items){
    console.log(items);
}
coding.forEach(printMe)


//

coding.forEach( (item1, index, arr) => {
    console.log(item1, index, arr);
})

//

const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

mycoding.forEach( (item2) => {
    console.log(item2.languageName);
})