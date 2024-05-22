// Example object
const originalObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['Reading', 'Traveling']
};

// Shallow copy
const shallowCopyObj = {...originalObj};

// deep copy  
const deepCopyObject = JSON.parse(JSON.stringify(originalObj))

originalObj.address.city = 'San Francisco';


console.log(shallowCopyObj)
console.log(deepCopyObject)
console.log(originalObj)




// JSON its a plain String

// let newDetails = Object.assign({},originalObj)

// JSON.parse its return (conver to object to object) or (array to array)

// https://youtu.be/luwoqcU5qBI


