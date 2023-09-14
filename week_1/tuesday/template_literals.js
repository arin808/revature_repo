// Template literals
/**
 * Introduced in ES6, they provide a more flexible and readable way to create strings
 * You use `` instead of '' or ""
 */

//Basic
const name = "Alice";
const greeting = `Hello, ${name}`;
console.log(greeting);

// Embedded expressions using ${}, the expression inside the curly braces is evaluated and the result is embedded in the string

// Expression evaluation
console.log(`The sum of 3 and 5 is ${3 + 5}`);

// Multiline strings
const multiline = `
This is a
multiline 
string`;

console.log(multiline);
