// Named exports
// We can export one or more variables, functions or classes from a modules using the export keywordq
// we create the functions, classes or variables that we need in this file
const greeting = "hello";
function sayHello(name){
    console.log(`${greeting}, ${name}`);
}

const person = {
    firstName: "John",
    lastName: "Doe",
}

// we export them out using module.exports
// this is an object that contains the things we want to export
module.exports = {
    greeting,
    sayHello,
    person,
}