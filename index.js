// this is my first javascript code
console.log('hello world');


// Variables declaraion 

let name = 'Sammy'; // if we don't declare name here. name will store undefined
console.log(name);

// cannot be reserved keywords 
// should be meaningful
// cannot start with a number 
// cannot contain a space or hyphen

// -- constants


const interestRate = 0.3;
// interestRate = 1 (you cannot do this.. you cannot reassign a constant)
console.log(interestRate)

// -- primitive types

let firstName = 'Sammy'; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let lastName = null; // to be used in situation where we need to clear the values of a variable

// -- dynamic typing - data type of the variable can be changed at runtime.
// javascript is dynamically typed language 

console.log(typeof(firstName)) // to find out datatype of a variable 
