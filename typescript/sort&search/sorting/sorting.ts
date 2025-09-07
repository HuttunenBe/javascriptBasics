// Sorting - re arranging elements 

// Array 

let numbers124 = [10, 2, 33, 4];
numbers124.sort();

// Numberic sort - doesn't make a new array

const numbers313 = [10, 5, 20, 15];
numbers.sort((a, b) => a - b);
console.log(numbers313); // 5, 10, 15, 20 // asc


numbers.sort((a, b) => b - a);
console.log(numbers313); // 20, 15, 10, 5 // desc


// String array - string -> split ('')

const fruits43 = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits43); // alphabetical

// Numbers

let sortedNumbers3 = Number(String(num).split('').sort().join(''));

// Object 

const peoples2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 }
];

// Sort by age ascending
peoples2.sort((a, b) => a.age - b.age);
console.log(peoples2); 

// [{name: "Bob", age: 20}, {name: "Alice", age: 30}]



