/**
 * Variable Scopes refer to the context in which a variable is declared and where it can be accessed
 * JS has two primary scopes: global and (local) function
 * Scope determines where in the code a variable can be accessed and used
 */

// Global scope
/**
 * Variables declared outside of a function are in the global scope
 * Global variables are accessible anywhere in the code, including inside functions
 * Can lead to naming conflicts, so be careful how they are used
 */

let globalVar = 10;

function example(){
    console.log(globalVar); // accessing global variable
}

example();

// Local (function) scope
/**
 * Variables declared inside a function are in the local scope
 * Local variables are only accessible inside the function where they are declared
 * Not visible or accessible outside the function
 */

function exampleLocal(){
    let localVar = 20;
    console.log(localVar);
}

exampleLocal();

// console.log(localVar); // will result in an error

// Block scope (ES6)
/**
 * Block scope allows variables to be scoped to a block of code(if statement, for loop, etc)
 * Variables declared with let and const are block scoped
 * Only accessible inside the block where they are declared
*/

if(true){
    let blockVar = 30; // block scoped
    console.log(blockVar);
}

// console.log(blockVar); // will result in an error

// Lexical scope (closure)
/**
 * JS has lexical scope, which means that functions are able to access variables from their containing scope even after the outer function has finished executing
*/