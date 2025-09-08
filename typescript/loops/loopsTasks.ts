// Print numbers from 1 to 5

let ar3 = [1, 2, 3, 4, 5];
for (let i = 1; i >= ar3.length; i++) console.log(ar3[i]);

for (let num of ar3) {
  console.log(num);
}

// Sum numbers from 1 to 5
let sum4 = 0;
for (let num of ar3) {
  sum4 += num;
}

console.log(sum4);

// Multiply numbers from 1 to 4

let sarr = [1, 2, 3, 4, 5];
let multiplied = 1; // multiplying from 1

for (let num of sarr.slice(0, 4)) {
  multiplied *= num;
}

console.log(multiplied);

// Print each element

console.log(multiplied);

// Sum all elements

let total2 = 1;
for (let num of sarr) {
  console.log((total2 += num));
}

// Find the maximum element

let maxArray3 = [1, 4, 5, 2];
let maxElement = maxArray3[0]; // starting from index 0

for (let num of maxArray3) {
  if (num > maxElement) {
    maxElement = num;
  }
}

console.log(maxElement);

// Map: double each element of arr

let mappedArray3 = maxArray3.map((value) => value * 2);

// Filter: only even numbers from arr

let filteredArray3 = maxArray3.filter((value) => value % 2 === 0);

// Reduce: sum all elements of arr

let reducedAll = maxArray3.reduce((acc, cur) => acc + cur, 0); // initial value at the end

let ssr = "hello";

// Print each character of str

console.log(ssr.split(""));

// Loop over it

ssr.split("").forEach((char) => console.log(char));
ssr.split("").map((char) => console.log(char));

// Convert str to uppercase using a loop

let convertedString = "";

for (let char of ssr) {
  convertedString += char.toLocaleUpperCase();
}

let converted = ssr
  .split("")
  .map((str) => str.toLocaleUpperCase())
  .join("");

// Count number of vowels in str

let vowelString = "hello";
let vowels = 0;

for (let char of vowelString) {
  if ("aeiou".includes(char.toLowerCase())) vowels++;
}

console.log(vowels);

let oabj = { a: 1, b: 2, c: 3 };

// Print all keys of obj

console.log(Object.keys(oabj));

// Print all values of obj

console.log(Object.values(oabj));

// Sum all values of obj
let summedValue = 0;

for (let key in obj) {
  summedValue += obj[key]; // access through key
}

let peoplse = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// Map: get array of names

let mappedNames = peoplse.map((person) => person.name);
console.log(mappedNames);

// Filter: people older than 25

let filteredAge = peoplse.filter((person) => person.age > 25);
console.log(filteredAge);

// Reduce: sum of all ages

const people2 = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 25 },
  { name: "Eve", age: 40 }
];

// Sum all ages using reduce
const totalAge = people2.reduce((acc, person) => acc + person.age, 0);


// Solve with map, filter n reduce

const array34 = [1, 2, 3, 4];

// Iterate through an array and print each element

const mappedArr = array34.map(num => num);
console.log(mappedArr);

// Sum all elements in an array

const sumAllElements = array34.reduce((acc, num) => acc + num, 0);
console.log(sumAllElements);

// Multiply all elements in an array

const allMultiplies = array34.map(num => num *= 2)
console.log(allMultiplies);

// Find the minimum element in an array

console.log(Math.min(...array34));

const minNumber = array34.reduce((min, current) => (current < min ? current : min), array34[0]);


// Find the maximum element in an array

console.log(Math.max(...array34));
const maxNumber = array34.reduce((max, current) => Math.max(max, current), array34[0]);

console.log(maxNumber); 

// With loop 

let maxNumber1 = array34[0];

for (const num of array34){
    if (num > maxNumber1) maxNumber1 = num
}; console.log(maxNumber1)

// Find the second largest element in an array

let secondMaxNumber = array34[0];

for (const num of array34){
    if (num > maxNumber1) maxNumber1 = num
}; console.log(maxNumber1)

const sortedDesc = [...array34].sort((a, b) => b - a)
const secondLargest = sortedDesc[1];

const maxx = Math.max(...array34);
const secondLargest2 = Math.max(...array34.filter(num =>num !== max))

// Count even numbers in an array

for (const num of array34){
    if (num % 2 === 0) {
console.log(num)
    }}

const evenNumbers3 = array34.filter(num => num % 2 === 0);
console.log(evenNumbers3);


// Count odd numbers in an array

const oddNumbers = array34.filter(num => num % 2 === 1);

for(const num of array34){
if (num % 2 === 1)
    console.log(num)
};

// Count elements greater than a target value

// Print each character of a string

// Count vowels in a string

// Count consonants in a string

// Reverse a string using a loop

// Convert a string to uppercase using a loop

// Sum numbers from 1 to N

// Compute factorial of a number using a loop

// Generate an arithmetic sequence from 1 to N

// Generate a geometric sequence from 1 to N

// Check if a number is prime using a loop

// Sum of all pairs in an array

// Count pairs in an array that satisfy a condition

// Generate multiplication table for a number

// Sum all values in an object

// Find keys in an object with a specific value

// Convert object values into an array

// Use map to transform array elements

// Use filter to select elements from an array



// Use reduce to accumulate values in an array

// Iterate through an array with forEach


