let score = 33;

// console.log(typeof score); // number
// console.log(typeof score); // number

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "mansoor";
let booleanIsLoggedIn = Boolean(isLoggedIn);

//  console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "mansoor" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

/******************** Operations ********************/

let value = 2;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(2 % 3);

let str1 = "hello";
let str2 = "mansoor";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 3 * 4 % 8); // never write that type of code its not acceptable in big compnay bcz its readibalty issue
// console.log(((3 + 3) * 4) % 8); // this one is best method

// console.log(+true);
// console.log(+"");

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; // this one is also not a good method

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// link if you want to study this topic from the official site

// https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-toprimitive

// this one from the mdn of pre and postfix increament

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
