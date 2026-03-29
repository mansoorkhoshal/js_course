const accountId = 12345;
let accountEmail = "mansoor@gmail.com";
var accountPassword = "1234";
accountCity = "Pakistan"; // this show that in js we can also shown something without the declearation of variable but never do this like ok
let accountState;

// accountId = 2345; // its not allowed

accountEmail = "ma@ma.com";
accountPassword = "21212121";
accountCity = "Islamabad";

console.log(accountId);

/* 
Prefer to not use the var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);