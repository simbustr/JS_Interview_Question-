// CRUD operations

let users = [
  { id: 1, name: "Simbu", username: "simbu.dev", email: "simbu@example.com" },
  {
    id: 2,
    name: "Anjali",
    username: "anjali.dev",
    email: "anjali@example.com",
  },
  { id: 3, name: "Raj", username: "raj.dev", email: "raj@example.com" },
  { id: 4, name: "Arun", username: "arun.dev", email: "arun@example.com" },
];

// Create
function createUser(newUser) {
  users.push(newUser);
}

createUser({
  id: 5,
  name: "Kumar",
  username: "kumar.dev",
  email: "kumar@example.com",
});
console.log("After Create:", users);

// Read
function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

console.log("Read User:", getUserByUsername("anjali.dev"));

function getAllUsers() {
  return users;
}

console.log("All Users:", getAllUsers());

// Update
function updateUser(id, updatedInfo) {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedInfo };
  }
}

updateUser(3, { username: "new.raj.dev", email: "new.raj@example.com" });
console.log("After Update:", users);

// Delete
function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}

deleteUser(2);
console.log("After Delete:", users);
