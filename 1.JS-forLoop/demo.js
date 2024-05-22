// Basic for Loop Example
// Iterating Over an Array
// Using for Loop with Objects
// Using Object.entries
// Nested for Loop
// Looping through an Array of Objects

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

// for (const iterator of object) {
// }

// for (var i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let j = 1; j <= 5; j++) {
//     console.log(j);
//   }

// Assignment to constant variable.
//   for (const k = 1; k <= 5; k++) {
//     console.log(k);
//   }

// const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

// for(let i =0 ; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// const user = {
//     id: 1,
//     name: 'Simbu',
//     username: 'simbu.dev',
//     email: 'simbu@example.com'
//   };

//   const keys = Object.keys(user)

//   for (let i = 0 ; i<keys.length ; i++){
//     console.log(`${keys[i]} : ${user[keys[i]]}`)
//   }

//   const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   for(let i=0 ; i<matrix.length ; i++){
//     for(let j=0 ; j<matrix[i].length ; j++){
//         console.log(matrix[i][j])
//     }
//   }

const users = [
    { id: 1, name: 'Simbu', username: 'simbu.dev', email: 'simbu@example.com' },
    { id: 2, name: 'Anjali', username: 'anjali.dev', email: 'anjali@example.com' },
    { id: 3, name: 'Raj', username: 'raj.dev', email: 'raj@example.com' },
    { id: 4, name: 'Arun', username: 'arun.dev', email: 'arun@example.com' }
  ];
  

for(let i = 0 ; i<users.length ; i++){
    console.log(users[i]);
}
