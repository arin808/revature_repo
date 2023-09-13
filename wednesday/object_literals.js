/**
 * Object literals are a way to create an object by specifying its peroperties and values
 * directly within the curly braces
 */

const person = {};
person.firstName = "Mike";
console.log(person);

const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
}
console.log(person2);

// access properties using dot notation
console.log(person2.age);

// add or modify properties
person2.address = "123 Main St.";
person2.age = 31;
console.log(person2);

// delete properties
delete person2.address;
console.log(person2);

//Object methods

// const person3 = {
//     name: "Mike Jons",
//     \\\\


// short hand property ES6 
// You can use shorthand property names when the property name is the same as the variable name
const firstName = "Jane";
const lastName = "Doe";

const person4 = {
    firstName,
    lastName,
    age: 30,
};

console.log(person4)