// Truthy Falsy

// Falsy
/**
 * false: boolean false is always falsy
 * 0
 * '' or "" : empty string is falsy
 * null
 * undefined
 * NaN : not a number - result of invalid math operations
 */

// Truthy
/**
 * true: boolean true is always truthy
 * 1
 * Non-zero numbers
 * Non-empty strings
 * Objects (even empty objects)
 * Arrays (even empty arrays)
 * Functions
 * Infinity and -Infinity
 * Dates
 */

if({}){
    console.log("truthy");
}
if([]){
    //do something
}else{
   //do something else
}