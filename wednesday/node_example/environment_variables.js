/**
 * Accessing env variables
 * 
 * This is done sing process.env in node.js depending on environment it is different for browsers
 * Env variables are used to store configuration settings, sensitive information, and other data that is used by the application
 * and should not be hard coded into the source code
 */

// access env variables
const nodePath = process.env.NODE_PATH;
console.log(nodePath);