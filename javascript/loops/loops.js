// 1. Loop from 1 to 10 using for

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Loop from 10 to 1 using while

let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// 3. Sum numbers from 1 to 100 using a loop

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 4. Loop through an array of names

const names = ["John", "Bob", "Anna", "Lucas"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 5. Use for...of to print values of an array

for (const name of names) {
  console.log(name);
}

// 6. Use for...in to loop over an object

const person = { name: "John", age: 30, city: "Lisbon" };
for (const key in person) {
  console.log(key + " " + person[key]);
}

// 7. Use continue to skip over negative numbers

const numbers = [5, -2, 8, -1, 4];
for (let n of numbers) {
  if (n < 0) continue;
  console.log(n);
}

// 8. Use break to stop when a number is divisible by 7

const numbersArray = [2, 4, 5, 14, 9, 21];
for (let number of numbersArray) {
  if (number % 7 === 0) {
    console.log(number);
    break;
  }
  console.log(number);
}

// 9. Loop through a 2D array

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let row of array) {
  for (let cell of row) {
    console.log(cell);
  }
}

// 10. Reverse an array using a loop (manually)

const numberArray = [1, 2, 3, 4, 5];
const reversedArray = [];
for (let i = numberArray.length - 1; i >= 0; i--) {
  reversed.push(numberArray[i]);
}
console.log(reversedArray);

/* forEach() */

names.forEach((name) => console.log(name)); // Sample

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// For loop

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// For of loop

function sum(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

// For each loop

function sum(numbers) {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
}

// Reduce

function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Oneline
const sum = (numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
const sum = (numbers) => numbers.reduce((a, b) => a + b, 0);
