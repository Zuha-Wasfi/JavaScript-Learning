const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Bihar Sharif"

// accountId = 2 // not allowed

accountEmail = "xyz@gmail.com"
accountPassword = "98765"
accountCity = "Kolkata"
let accountState;

console.log(accountId);

/*
Prefer not to use 'var'
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])