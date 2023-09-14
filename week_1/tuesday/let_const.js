// Var
/**
 * Var was the original variable declaration keyword in JS
 * It has a few problems like a limitation in variable scoping and variable hoisting
 * Variable hoisting is when a variable is brought to the top of the script and if used before it is declared, it will return undefined
 */
console.log(name)

let name = "Arin";

/**
 * Let and const
 * 
 * let and const are used for variable declaration in JS, introduced in ES6
 * They provide better variable scoping and management than var
 */

// Let
/**
 * Let is block scoped, meaning that it is only accessible within the block of code where it is declared
 * You can reassing the value of a let variable
 */

// Const
/**
 * Const is used to declare variables within block scope
 * However, variables declared with const cannot be reassigned after initialization
 * They are constants
 */

const PI = 3.14159; // declare and initialize
// PI = 3; // will result in an error

// chooseing between let and const
// use let when you want to reassign the variable
// use const for values that should not change
// in general it is always recommended to use const unless theres a need to reassign the variable
