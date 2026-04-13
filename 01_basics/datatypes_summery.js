/*
Acutally Js divide the data types to two categories 
1. Primitive Data Types
2. Non-Primitive Data Types or Refrence Data Types
*/

// Primitives

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100; // number
const name = "mansoor"; // string
const isLogedIn = true; // boolean
const value = null; // null
let isEmail; // both answer is same if you add manuly or not so result is undefined
// or
let isAnotherEmail = undefined;
const id = Symbol("123"); // symbol
const anotherId = Symbol("123"); // both are different and unique bcz of Symbol
// console.log(id === anotherId); // false

const bigNumber = 49655461654554n; // bigInt

// Non-Primitives (Reference Data Types):

// Array, Objects, Functions

const heros = ["muhammad swa", "abubakar sadiq", "umar farooq"]; // array

let myObj = {
  name: "mansoor",
  age: 22,
  state: "pakistan",
}; // Objects

const myFunction = function () {
  console.log("Hello World");
}; // Function
// if you checkt the data type of myFunction you will see the function but acutally its called the function object

// If you want to check the data type of anything you simple put in the typeof method. Like:

// console.log(typeof myFunction);

// if you want to read the official doucomnetation. Link below
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// today we are talking about the memory

// its two type
// 1. Stack (Primitive Data Type)-- actually its only creating the copy of original value. 1.1 e.g
// 2. Heap (Non-Primitive Data Type)

// 1.1

let myHobby = "Coding";
let myAnotherHobby = myHobby;

myAnotherHobby = "Reading a book";

console.log(myHobby);
console.log(myAnotherHobby);

let userOne = {
  email: "mansoor@gmail.com",
  userId: "mansoor@id",
};

let userTwo = userOne;

userTwo.email = "khoshal@gmail.com";

console.log(userOne); // khoshal@gmail.com
console.log(userTwo); // khoshal@gmail.com

// if you see the output then you should be noted that the email is changed in both userOne and userTwo.
