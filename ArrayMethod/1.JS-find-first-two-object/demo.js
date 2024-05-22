

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
    },
    {
      id: 5,
      name: 'Arun',
      username: 'anjali.dev',
      email: 'arun@example.com'
    },
    {
      id: 6,
      name: 'Arun',
      username: 'anjali.dev',
      email: 'arun@example.com'
    }
  ];

  const result = users.filter((item)=>item.username === "anjali.dev").slice(0,2)
  console.log(result)

  //and

  const result2 = users.slice(0,2)
  console.log(result2)

