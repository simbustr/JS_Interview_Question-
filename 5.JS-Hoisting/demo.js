// Hoisting is a javascript behavier where variable and function declaration move on top contining scope during compliation phares before
// the code is executed

// Hoisted
console.log(a, "example-1");
var a = 10;

add(5, 5);
function add(x, y) {
  console.log(x + y, "example-2");
}

console.log(myVar); // Output: undefined
var myVar = 5;
console.log(myVar); // Output: 5

myFunction(); // Output: "Hello, I am a function!"
function myFunction() {
  console.log("Hello, I am a function!");
}

// Non Hoisted

simbu(15, 25, "example-4");
const simbu = function addexp(a, b) {
  console.log(a + b);
};

console.log(myLetVar); // Output: ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 10;
console.log(myLetVar); // Output: 10

console.log(myConstVar); // Output: ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 20;
console.log(myConstVar); // Output: 20

// This will throw an error because function expressions are not hoisted
myFunctionExpression(); // Output: TypeError: myFunctionExpression is not a function
var myFunctionExpression = function() {
  console.log("Hello, I am a function expression!");
};

myFunctionExpression(); // Output: "Hello, I am a function expression!"

