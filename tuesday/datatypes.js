/**
 * High-level, dynamically typed programming language
 */


/** 
 * Primitive Data Types
*/

// numbers

let age = 10;
let price = 19.99;

// strings

let name = "John";
let message = 'hello, world';

// boolean
let isStudent = true;
let isLoggedIn = false;

// undefined 
let undefinedVariable = undefined;
let undefinedVariable2;

// null
let emptyValue = null;

// symbol ES6
const uniqeKey = Symbol("description");

// bigInt
const bigNum = 12345678901234567890n;

console.log(typeof age);
console.log(typeof price);
console.log(typeof name);
console.log(typeof message);
console.log(typeof isStudent);
console.log(typeof isLoggedIn);
console.log(typeof undefinedVariable);
console.log(typeof undefinedVariable2);
console.log(typeof emptyValue);
console.log(typeof uniqeKey);
console.log(typeof bigNum);

/** 
 * Reference Data Types
*/

// Object
let person = {
    "firstName": "John",
    "lastName": "Doe"
};

let person2 = {
    firstName: "Mike",
    lastName: "Jones"
};

console.log(person);
console.log(person2);


    // Arrays are objects
    let numbers =[1,2,3,4,5];
    let anyData = ["hello", 1, null, undefined];

    console.log(numbers);
    console.log(anyData);


