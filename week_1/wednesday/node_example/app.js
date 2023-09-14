console.log("hello I am a node app");

/**
 * package.json
 * It is a crucial file in NOde.js projects. It is the configuration file that contains metadata bout the project and its dependencies
 * It is used by NPM to manage project dependencies and scripts, or other project related information
 * 
 * Project Metadata
 * 
 * name - name of your project
 * version - version of your project
 * description - description of your project
 * author - author of your project
 * license - license information
 */

const example = require("./example_exports.js");
const {person} = require("./example_exports.js");

console.log(example.sayHello("John"));
console.log(example.greeting);
console.log(person);

/**
 * CommonJS vs ES6 Modules
 * 
 * Node.js traditionally used CommonJS modules which uses module.exports and require()
 * for exporting and importing modules
 */