


const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]




//Example-1

const obj = [1,2,1,2,3,4,5,6,4]
const result = obj.filter((value,index)=>obj.indexOf(value) === index)
console.log(result)


//Example-2

// function findDublicates(arr){
  
//     return arr.filter((item,index)=>arr.indexOf(item) === index)
// }
// let arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 3]
// console.log(findDublicates(arr));



//Example-3

// function findDublicates(arr){
  
//     return arr
// }
// let arr = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 3]
// console.log(findDublicates(arr));






