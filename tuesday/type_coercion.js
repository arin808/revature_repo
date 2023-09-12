// Type coercion
/**
 * Refers to the automatic conversion of one data type to another when performing operations or comparisons that involve two data types
 * JS is a loosely typed language, meaning that it doesn't require explicit datatype declaration
 */

// Implicit type coercion (auto conversion)
const num = 5;
const str = "10";
const result = num + str; // number is coerced into a string then concatenated 

console.log(result);

// Comparison and loose equality (==)
const x = 5;
const y = "5";
console.log(x == y); // true, y is coerced into a number

// comparison with strict equality (===)
console.log(x === y); // false, no coercion

/**
 * Trutyh and Falsy
 * JS 
 */
if("hello"){
    // this will be executed becuase "hello" is truthy
    console.log("truthy");
}else{
    console.log("falsy");
}
if(0){
    console.log("truthy");
}else{
    // this will be executed becuase 0 is falsy
    console.log("falsy");
}

// Explicit type coercion (type casting)
// If you want to explicitly convert data types