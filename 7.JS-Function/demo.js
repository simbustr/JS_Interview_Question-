// Function is a Block of reusable code executed designed to perfom a
// particular task or calculate a value. they can take input(parameters)
// perform action and return result

// the different ways to define a function in JavaScript?

// 1. Function Declaration
// function functionName() {}
// 2.Function Expression
// const functionName = function() {};
// 3.Arrow Function
// const functionName = () => {};

// Arrow functions do not have their own this value;
// Arrow functions do not have their own arguments object;
// Arrow functions are more concise and have implicit return when there is no curly braces {}.


// Example 1: Simple Function Returning Another Function
// Example 2: Higher-Order Function
// Example 3: Currying
// Example 4: Closures
// Example 5: function expression


function abc() {
    return 20;
  }
  console.log(abc(), "return");


  var myFunctionExpression = function() {
    console.log("Hello, I am a function expression!");
  };
  
  myFunctionExpression(); // Output: "Hello, I am a function expression!"