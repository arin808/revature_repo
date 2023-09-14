// Arrays
/**
 * Arrays are data structure used to store and manipulate collections of data
 * They can hold multiple data types
 * They can grow and shrink dynamically
 */

// Creating
const fruits = ["apple", "orange", "banana"];

// Accessing elements
const firstFruit = fruits[0];
const secondFruit = fruits[1];

// Modify elements
fruits[2] = "grape"; // changes the third element
console.log(fruits);

// Array methods
fruits.push("mango"); // adds to the end of the array
console.log(fruits);

fruits.pop(); // removes the last element
console.log(fruits);

// Array length
const numFruits = fruits.length;

// Iteration
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// For the indexes of the array
for(const key in fruits){
    console.log(key);
}

// For the elements of the array
for(const item of fruits){
    console.log(item);
}