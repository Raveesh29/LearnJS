# LearnJS
Repo to track my learning process of javascript


# JavaScript Fundamentals - Complete Notes

## Running JavaScript Code

### Browser Method
```html
<script>
  console.log("Hello World");
</script>
<!-- Or external file -->
<script src="script.js" type="text/javascript"></script>
```

### Node.js Method
```bash
node script.js
```

## Console Output & Comments

### Comments
```javascript
// Single line comment
/* Multi-line
   comment */
```

### Console Output
```javascript
console.log("Normal message");
console.error("Error message"); // Red text
console.warn("Warning message"); // Yellow text

// Template literals with variables
const v = 64;
console.log(`v is equal to ${v}`); // Use backticks for embedding
```

## User Input (Node.js only)
```bash
npm init -y
npm install prompt-sync
```
```javascript
const prompt = require('prompt-sync')();
const userInput = prompt("Type something: ");
console.log(userInput); // Always returns a string
```

## Data Types & Variables

### Primitive Types
```javascript
// String
"hello" 'world' `template`

// Boolean  
true false

// Number
42 3.14 -5

// Undefined & Null
undefined // Not yet assigned
null // Explicitly empty

// BigInt and Symbol (advanced, rarely used)
```

### Variable Declaration
```javascript
// var - function scoped, hoisted
var x = 5;

// let - block scoped, not hoisted
let y = 10;

// const - block scoped, cannot reassign
const z = 15;
```

**Key Insight**: Use `let` and `const` instead of `var` to avoid scoping issues. `const` prevents reassignment but allows mutation of objects/arrays.

## Arithmetic & Type Coercion

### Basic Operators
```javascript
+ - * / ** % ++ --
+= -= *= /= %=
```

### Type Coercion (Dangerous!)
```javascript
6 + "7" // "67" (number becomes string)
"6" + 7 // "67" 
6 * "2" // 12 (string becomes number)
"hello" - 2 // NaN (Not a Number)
6 + true // 7 (true = 1)
```

### Type Conversion
```javascript
// To Number
Number("123") // 123
parseInt("123px") // 123 (ignores non-numeric)
parseFloat("12.34") // 12.34

// To String
String(123) // "123"
123 + "" // "123" (quick trick)
(123).toString() // "123"
```

## Comparison Operators

### Loose vs Strict Equality
```javascript
// Loose (avoid!) - applies type coercion
1 == "1" // true
null == undefined // true
"" == 0 // true

// Strict (preferred) - checks value AND type
1 === "1" // false
1 !== "1" // true
```

**Critical**: Always use `===` and `!==` to avoid unexpected behavior.

## Logical Operators

```javascript
&& || !

// With non-booleans (weird behavior!)
"hello" || true // "hello" (returns first truthy)
"" || "world" // "world" (empty string is falsy)
true && "hello" // "hello"
false && "hello" // false
```

## Conditionals

### If/Else
```javascript
if (condition) {
  // code
} else if (otherCondition) {
  // code
} else {
  // code
}

// Single line (no braces needed)
if (true) console.log("works");
```

### Ternary Operator
```javascript
const result = condition ? "true value" : "false value";
```

### Switch Statement
```javascript
switch (value) {
  case 1:
    console.log("one");
    break; // Important! Prevents fall-through
  case 2:
    console.log("two");
    break;
  default:
    console.log("other");
}
```

## Arrays

### Creation & Access
```javascript
const arr = [1, 2, 3, true, "mixed"]; // Mixed types allowed
const arr2 = new Array(5); // Empty array with 5 slots
const arr3 = Array.from("hello"); // ['h','e','l','l','o']

arr[0] // Access element
arr[arr.length - 1] // Last element
arr[10] = "test"; // Creates empty slots
```

### Common Methods
```javascript
arr.push(4) // Add to end
arr.pop() // Remove from end  
arr.shift() // Remove from start
arr.unshift("new") // Add to start

arr.indexOf("item") // First occurrence
arr.includes("item") // Boolean check
arr.concat(arr2) // Combine arrays
arr.join("|") // Convert to string
arr.slice(1, 3) // Copy portion
arr.splice(1, 2) // Remove 2 elements starting at index 1
```

### Destructuring & Spread
```javascript
const [x, y, ...rest] = [1, 2, 3, 4]; // x=1, y=2, rest=[3,4]
const copy = [...arr]; // Shallow copy
const combined = [1, 2, ...arr, 5]; // Spread elements
```

## Loops

### For Loops
```javascript
// Traditional
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// For...of (values)
for (const value of arr) {
  console.log(value);
}

// For...of with index
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
```

### While Loops
```javascript
while (condition) {
  // code
}

do {
  // code
} while (condition);
```

## Objects

### Creation & Access
```javascript
const obj = {
  name: "Alice",
  age: 25,
  sayHello: function() { return "Hello!"; }
};

// Access properties
obj.name // Dot notation
obj["name"] // Bracket notation
obj.newProp = "value"; // Add property
delete obj.age; // Remove property
```

### Object Methods
```javascript
Object.keys(obj) // Array of keys
Object.values(obj) // Array of values
Object.entries(obj) // Array of [key, value] pairs

// Loop through object
for (const key in obj) {
  console.log(key, obj[key]);
}
```

### Destructuring & Spread
```javascript
const {name, age} = obj; // Extract properties
const combined = {...obj1, ...obj2}; // Merge objects (later values override)
```

**Warning**: Spread creates shallow copies - nested objects share references!

## Sets & Maps

### Sets
```javascript
const mySet = new Set([1, 2, 3]);
mySet.add(4);
mySet.delete(2);
mySet.has(1); // true
mySet.size; // Get count
mySet.clear(); // Remove all

// Convert to array
const arr = [...mySet];
```

### Maps
```javascript
const myMap = new Map([["key1", "value1"], ["key2", "value2"]]);
myMap.set("key3", "value3");
myMap.get("key1"); // "value1"
myMap.delete("key2");
myMap.has("key1"); // true
myMap.size;

// Loop through map
for (const [key, value] of myMap) {
  console.log(key, value);
}
```

## Functions

### Declaration Methods
```javascript
// Function declaration
function greet(name, age = 18) {
  return `Hello ${name}`;
}

// Function expression
const greet = function(name) {
  return `Hello ${name}`;
};

// Arrow function
const greet = (name) => {
  return `Hello ${name}`;
};

// Arrow function (one-liner)
const greet = name => `Hello ${name}`;

// Rest parameters
function addNums(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
```

## Array Methods (Map, Filter, Reduce)

```javascript
const numbers = [1, 2, 3, 4];

// Map - transform each element
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]

// Filter - keep elements that match condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Reduce - combine all elements to single value
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10
```

## The `this` Keyword

```javascript
const person = {
  name: "Alice",
  greet: function() {
    return `Hello, I'm ${this.name}`; // Works - 'this' refers to person
  },
  greetArrow: () => {
    return `Hello, I'm ${this.name}`; // Broken - 'this' is undefined
  }
};
```

**Critical**: Arrow functions inherit `this` from where they're defined, not where they're called. Use regular functions for object methods.

## Error Handling

```javascript
try {
  // Risky code
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  // Always runs (cleanup)
}
```

## Promises (Async Operations)

```javascript
// Create promise
const myPromise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Success value");
  } else {
    reject("Error message");
  }
});

// Use promise
myPromise
  .then(value => console.log(value)) // On success
  .catch(error => console.log(error)) // On failure
  .finally(() => console.log("Always runs"));

// Multiple promises
Promise.all([promise1, promise2, promise3])
  .then(results => console.log(results)) // Array of all results
  .catch(error => console.log(error)); // First error
```

**Key Insight**: Promises handle asynchronous operations (API calls, file operations) that take unknown time to complete.