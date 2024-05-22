//Example-1 Destructuring Array Elements
//Example-2 Destructuring Object Properties
//Example-3 Using Destructuring in Function Parameters
// Destructuring with Default Values
// Renaming Variables
// Nested Object Destructuring
// Destructuring Function Parameters
// Destructuring with Rest Properties
// Destructuring in Loops
// Combining Array and Object Destructuring


const users = [
  {
    id: 1,
    name: "Simbu",
    username: "simbu.dev",
    email: "simbu@example.com",
  },
  {
    id: 2,
    name: "Anjali",
    username: "anjali.dev",
    email: "anjali@example.com",
  },
  {
    id: 3,
    name: "Raj",
    username: "raj.dev",
    email: "raj@example.com",
  },
  {
    id: 4,
    name: "Arun",
    username: "arun.dev",
    email: "arun@example.com",
  },
];


//Example-1 Destructuring Array Elements
const [user1, user2, user3, user4] = users;

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);


//Example-2 Destructuring Object Properties

const { name, username, email } = users[0];

console.log(name);     // Output: Simbu
console.log(username); // Output: simbu.dev
console.log(email);    // Output: simbu@example.com






//Example-2 Using Destructuring in Function Parameters

function printUserDetails({ name, username, email }) {
  console.log(`Name: ${name}, Username: ${username}, Email: ${email}`);
}

printUserDetails(users[2]); // Output: Name: Raj, Username: raj.dev, Email: raj@example.com

