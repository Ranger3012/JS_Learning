const accountId = 144553
let accountEmail = "mk3012@gmail.com"
var accountPassword = "12345"
accountCity = "Sudbury"

let accountState;

// accountId = 2
accountEmail = "3012mk@gmail.com"
accountPassword = "54321"
accountCity = "Surat"



// console.log(accountId);

/*
Prefer not to use var, because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])