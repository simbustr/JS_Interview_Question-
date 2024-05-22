

// The find method in JavaScript is used to find the first element in an array that satisfies a provided testing function.
// array.find(callback(element[, index[, array]])[, thisArg])

const users = [
    {
      id: 1,
      name: 'Simbu',
      username: 'simbu.dev',
      email: 'simbu@example.com'
    },
    {
      id: 2,
      name: 'Anjali',
      username: 'anjali.dev',
      email: 'anjali@example.com'
    },
    {
      id: 3,
      name: 'Raj',
      username: 'raj.dev',
      email: 'raj@example.com'
    },
    {
      id: 4,
      name: 'Arun',
      username: 'anjali.dev',
      email: 'arun@example.com'
    }
  ];

  const result = users.find((item)=>item.username === "anjali.dev")
  console.log(result)

  //or

  let result2;

for (let i = 0; i < users.length; i++) {
  if (users[i].username === "anjali.dev") {
    result2 = users[i];
    break; // Exit the loop once the user is found
  }
}

console.log(result2);