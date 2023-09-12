/** 
 * Assignment operators
*/

// Declaration and assignment
let y; // declaration
y = 20; // assignment

let z = 30; // combines into one step/statement

// right to left evaluation
let a = 5 + 5; // expression (5+5) is evaluated first then result is assigned to a

// reassignment
let count = 1;
count = 2;

// multiple assignment
let firstName = "john", lastName = "doe", age2 = 30;

// assignments with other operators
let num = 45;
num += 2; // 47

/** 
 * Comparison and Logical Operators
*/

// Comparison Operators == and !-
// the equality operaot checks if two values are equla, performing type coercion if necessary
let x = 5; 
let w = "5";

console.log(x == w); // type coercion is done to convert w to a number

// strict comparison equality and inequality
// === or !==
console.log (x === w);

// Logical Operators
// Logical AND &&
let isAdult = true;
let hasLicense = true;
console.log(isAdult && hasLicense);

// Logical OR ||
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday);

// Logical NOT !
let isSunny = false;
console.log(!isSunny)