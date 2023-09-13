/**
 * JSON (JavaScript Object Notation) is a lightweight data-interchange format which is 
 * easy for humans to read and write and easy for machines to parse and generate.
 * Often used to transmit information between a server and web application 
 * or between different parts of an application.
 * 
 * Key characteristics
 * - Data format: JSON is primarily a data format used for representing structured data. 
 *   Often used to serialize and deserialize data, so it's used for data storage and exchange.
 * - Syntax: JSON uses a simple and readable syntax consisting of key-value pairs
 *   Keys are always enclosed withing double quotes "", and values can be a string, number,
 *   object, array, boolean, null, or another JSON object.
 */

/**
 * {
 *  "name": "John Doe",
 *  "age": 30,
 *  "isStudent": false,
 *  "hobbies": ["music", "movies", "sports"],
 *  "address": {
 *    "street": "123 Main St.",
 *    "city": "Boston",
 *    }
 * }
 */

/**
 * JSON.stringify and JSON.parse()
 * 
 * stringify and parse are two JS methods used for workign with JSON data.
 */

// JSON.stringify()
const person = {
    firstName: "Mike",
    lastName: "Jones",
    age: 30,
    isStudent: false,
};

const jsonString = JSON.stringify(person);
console.log(person);
console.log(jsonString);

// JSON.parse()
const jsonString2 = '{"name": "Alice", "age": 25}';
const person2 = JSON.parse(jsonString2);
console.log(person2.name);
console.log(person2.age);