// Basic Array Destructuring
// Skipping Items
// Destructuring with Default Values
// Swapping Variables
// Destructuring from a Function Return Value
// Nested Array Destructuring
// Using Rest Parameter
// Destructuring in Loops


const numbers1 = [1, 2, 3, 4, 5];
const [d, e, f] = numbers1;
console.log(d); // Output: 1
console.log(e); // Output: 2
console.log(f); // Output: 3



const numbers2 = [1, 2, 3, 4, 5];
const [first, , third, , fifth] = numbers2;
console.log(first); // Output: 1
console.log(third); // Output: 3
console.log(fifth); // Output: 5


const numbers = [1, 2];
const [a = 10, b = 20, c = 30] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 30


let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // Output: 2
console.log(y); // Output: 1



function getCoordinates() {
  return [10, 20];
}
const [k, s] = getCoordinates();
console.log(k); // Output: 10
console.log(s); // Output: 20



const nestedArray = [1, [2, 3], 4];
const [p, [o, r], t] = nestedArray;
console.log(p); // Output: 1
console.log(o); // Output: 2
console.log(r); // Output: 3
console.log(t); // Output: 4



const numbers3 = [1, 2, 3, 4, 5];
const [firsts, second, ...rest] = numbers3;
console.log(firsts);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]







const points = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (const [x, y] of points) {
  console.log(`x: ${x}, y: ${y}`);
}
// Output:
// x: 1, y: 2
// x: 3, y: 4
// x: 5, y: 6


