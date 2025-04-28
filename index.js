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

// Reference types 
// Object 
// arrays 
// functions 


// Object 

let person = {
    name:'john',
    age:'30'
};

console.log(person);

// accessing values of the object - dot notation
console.log(person.name);

// accessing values of the object - bracket notation
console.log(person['age']);


// Arrays

let selectedColors = ['red','blue']; //  creating array 
console.log(selectedColors)
console.log(selectedColors[1])

selectedColors[2] = 'green';
selectedColors[4] = 1 // we can store any type of data in an array 
console.log(selectedColors)

// Array is a type of object. - it is a data structure that is used to store a list of items
console.log(selectedColors.length)


// Functions


// performing a task
function greet(name, lastName) {
    console.log('hello '+ name + ' ' + lastName);
}

greet('John', 'Legend');
greet('Nancy');

// calculate a value 
function square(number){
    return number*number;
}

console.log(square(2));


// Operators

// Arithmetic Operators 
 let x = 10;
 let y = 100;

 console.log(x+y);


// increment ++

console.log(x++);
console.log(++x);


//  decrement -- 
console.log(--x);
console.log(x--);
console.log(x);


// Assignment operators 

x+=1; // x = x+1
console.log(x);

x*=10; // x = x * 10
console.log(x);


// Comparision operators - the result of this expression is a boolean 

// relational operators
x = 1;
console.log(x>0);

// equality - strict (checks for type + value)
console.log(x===1);
console.log(x!==1);

// equality - loose (checks only for value; it converts the type of right side to match with left side and then compares if the value is equal)
console.log('1'==1); // type is converted to string and checked
console.log(true == 1);

// ternary operator 
 let score = 60;
 let result = score > 33 ? 'pass' : 'fail';

 console.log(result);

// logical operators 
// AND (&&)
// OR (||)
// NOT (!)

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);




