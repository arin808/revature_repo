/**
 * Anonymous function is a function without a name.
 * Instead of defining a named function with the keyword fucntion, you define it as an expression
 * Often used as arguments to other functions or as an IIFE (Immediately Invoked Function Expression)
 */

// Function expression
function name(){

}
const add = function(a,b){
    return a+b;
}
const result = add(1,2); // 3
console.log(result);

// callback function
// anonymous functions are frequently used as callback functions passed to higher
// order functions like forEach, map, filter, and event handlers
const numbers = [1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});

// IIFE (Immediately Invoked Function Expression)
// an anonymous function that is executed immediately after it is defined
// often used to create a private scope for variables
(function(){
    const message = "This is an IIFE";
    console.log(message);
})();

// arrow functions
// arrow functions are a shorter syntax for writing function expressions

/**
 * const functionName = (params) =>{
 * // function body
 * }
 * If its only one line curly braces are optional
 */
const multiply = (a,b) => a*b;
const square = x => x*x;

// if there are no parameters, you need to include empty parentheses
const sayHello = () => console.log("Hello");

// There is no this binding
/**
 * Arrow functions do not have their own this. It is inherited from the parent scope.
 */
function Person(name){
    this.name = name;
    this.sayHello = () =>{
        console.log(`Hello ${this.name}`);
    }
}
const person = new Person("John");
person.sayHello();

/**
 * this keyword
 * the this keyword in JS is a special identifier that refers to the current object or  context
 * within which the code is executing
 * The value of this can change depending on how and where a function is called.
 * Understanding how this works is quite important to working with objects, function, and constructors.
 */
// Global context
console.log(this);

// Function context
/**
 * Inside a function, the value of this can vary depending on how the function is called
 * In a regular function (not an arrow function), this refers to the boject that called the function
 * If called directly without an object, this refers to the global object
 */
function greet(){
    //console.log(this === window); // true in a browser
    console.log(this === global); // true in node.js
};

greet();

// in an object method, this refers to the object that contains the method

const person2 = {
    name: "John",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

person2.greet();

// constructors context
// Inside a construction function, this refers to the newly created instance of the object
function Person(name){
    this.name = name;
}
const john = new Person("John");
console.log(john.name);

// Arrow function
// In an arrow function, this refers to the parent scope
const arrPerson = {
    name: "John",
    sayHello: () =>{
        console.log(`Hello ${this.name}`); // this.name is undefined
    }
}
arrPerson.sayHello(); //  undefined