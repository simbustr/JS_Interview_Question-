// Closer Function

// Closer give you access to OuterFunction Scope from an InnerFunction Scope
// A closure is a combination of a function bundel to geather with refereance its a surrounded State

// Example-1

function OuterFunction() {
  let OuterVarable = "Hello";

  function InnerFunction() {
    console.log(OuterVarable);
  }
  return InnerFunction;
}

const myFunction = OuterFunction();
myFunction();

// Example-2

function OuterFunction2() {
  let Counter = 0;

  function InnerFunction2() {
    console.log("Counter", Counter++);
  }
  return InnerFunction2;
}

const myFunction2 = OuterFunction2();

myFunction2();
myFunction2();
