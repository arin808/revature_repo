const greeting = "hello";
function sayHello(name){
    console.log(`${greeting}, ${name}`);
}

const person = {
    firstName: "John",
    lastName: "Doe",
}

export default {
    greeting,
    sayHello,
    person,
}