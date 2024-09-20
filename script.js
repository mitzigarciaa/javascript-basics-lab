// Variables
let myName = "Mitzi Garcia";
let myAge = 20;
let isEnrolled = true;

console.log(`my name is ${myName} my age is ${myAge} is enrolled ${isEnrolled}`);

// String
let firstName = "Mitzi";
let middleName = 'Abigail';
let lastName = `Garcia`;

let fullName = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);

// Boolean
let found = true;
let lost = false;
console.log(found);
console.log(lost );

found = false;
lost = true;

console.log(`now found is ${found} and lost is ${lost}`)


// Number
let distance = 123.4; // a floating-point number

// BigInt 
let largeNumber = 123456789101234567n; // a large integer beyond the safe limit for Number

console.log(distance);
console.log(largeNumber );

// Object

const person = {
    age: 20,
    name:"Mitzi"
}


console.log(person);

// Arrays
let colors = ['Pink', 'Blue', 'Purple'];
console.log(colors[0]); // Accesses the first element, output: 'Pink'
colors.push('Black'); // Adds a new element at the end
console.log(colors); // Output: ['Pink', 'Blue', 'Purple', 'Black']
colors.pop();
console.log(colors);


// Arithmetic Operators
console.log(5 * 3); // Multiplication,
console.log(20 / 2); // Division
console.log(11 % 3); // Modulus (Remainder)

console.log(10 + 5); // Addition
console.log(10 - 5); // Subtraction

// Comparison Operators
let x = 5; 
let y = 10;
console.log("10" == y); // Equality
console.log("10" === y, "10 string = 10 number"); // false
console.log("10" === 3); // Strict equality
console.log(x != y); // Inequality
console.log(x < y); // Less than
console.log(x > y); // Greater than
console.log(x <= y); // Less than or equal to
console.log(x >= y); // Greater than or equal to

// Logical Operators
let a = true;
let b = false;
console.log(a && b); // Logical AND
console.log(a || b); // Logical OR
console.log(!a); // Logical NOT