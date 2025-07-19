const accountId = 12345
let accountEmail = "sachin@google.com"
var accountPassword = "2618"
accountCity = "Hubli"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sac123@google.com"
accountPassword = "3031"
accountCity = "dvg"
console.log(accountId);

/*
prefer not to use var because of the issue in block scop and function scop
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])