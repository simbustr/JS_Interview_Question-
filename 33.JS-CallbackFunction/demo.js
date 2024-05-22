// Callback Function

// Callback is a function that is passed as an argument to the another function and executed after a certain task has been completed

// Callback functions are commonly used in asynchronous programming to handle tasks like fetching data from a server,
// processing large datasets, or performing animations.

// 1.Basic Example.............................

function greet(name, simbu) {
  simbu(name);
}

function greetMessage(message) {
  console.log(message);
}

greet("Alice", greetMessage);

// 2.Asynchronous Example........................

function fetchData(Callback) {
  let data = "fetch data succesfully";
  Callback(data);
}

function processData(data) {
  console.log("Processing data:", data);
}

fetchData(processData);



// 3.Event Handling Example

document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});


// 4.Array Iteration


const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number * 2);
});







function person(callback)
{
    
    callback('Data processed')
}
person ((result) =>{
    console.log(result)
})



// Function to sort an array of numbers using a callback

function sortNumbers(numbers, callback) {
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  callback(sortedNumbers);
}

// Example array of numbers
const numbers2 = [3, 1, 5, 2, 4];

// Callback function to log the sorted array

function logSortedNumbers(sortedNumbers) 
{
  console.log(sortedNumbers);
}

// Call the sortNumbers function with the array and callback
sortNumbers(numbers2, logSortedNumbers); // Output: [1, 2, 3, 4, 5]




