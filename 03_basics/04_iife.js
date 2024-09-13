// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log(`DB CONNECTED`);
}
chai();

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})(); //iife


((name) => {
    // without name iife
    console.log(`DB CONNECTED TWO ${name}`);
})('MK_CODER');

