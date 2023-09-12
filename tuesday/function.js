/** 
 * Functions are a fundamental concept in JS, allowing you to group and encapsulate a block of code
 */

// Function declaration
// you can declare a function using the function keyword, followed by name, a list of params, and a block of code in curly braces

console.log(add(12, 55));

function sayHello(name){
    console.log("Hello " + name);
}

// Function invocation
sayHello("Arin");
sayHello(3);
sayHello({name: "Arin"});

// return statement
function add(a, b){
    return a + b;
}

let sum = add(3, 5);
console.log(sum);

// Function scope
/**  
 * Variables declared inside a function are scoped to that function and are not accessible outside the scope of the function
 */

// Function hoisting
/** 
 * Function declarations are hoisted, this means that they can be used before they are declared
 * refer to top of file
 */
// Closure
/** 
 * 
 */

function outer(){
    let message = "hello, ";
    function inner(name){
        console.log(message + name);
    }
    return inner;
}

let greet = outer();

greet("Alice");

// Default params
/**
 * Introduced in ES6, allows you to specify default values for params 
 * this prevents undefined values showing up in code and creating crashes
 */

function greetWithDefaults(name = "Guest"){
    console.log("Hello " + name);
}
greetWithDefaults("Alice");
greetWithDefaults();