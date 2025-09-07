
const array36 = [10, 20, 30, 40]; 

// indexOf
console.log(array36.indexOf(20)); // 1
console.log(array36.indexOf(50)); // -1

// includes
console.log(array36.includes(30)); // true
console.log(array36.includes(50)); // false

// find
const firstAbove25 = array36.find(num => num > 25);
console.log(firstAbove25); // 30

// findIndex(callback)

const indexx = numbers.findIndex(num => num > 25);

// filter
const allAbove25 = array36.filter(num => num > 25);
console.log(allAbove25); // [30, 40]

// String searching 

// Strings
const tejjjxt = "hello world";

// indexOf → position of first occurrence of substring
console.log(text.indexOf("world")); // 6
console.log(text.indexOf("JavaScript")); // -1

// includes → check if substring exists
console.log(text.includes("hello")); // true
console.log(text.includes("Java"));  // false

// find / findIndex → not directly for strings (use arrays of characters or split)
const chars = text.split(''); // ['h','e','l','l','o',' ','w','o','r','l','d']

// find → first character 'l'
const firstL = chars.find(char => char === 'l');
console.log(firstL); // 'l'

// findIndex → index of first character 'l'
const indexL = chars.findIndex(char => char === 'l');
console.log(indexL); // 2

// filter → all 'l' characters
const allL = chars.filter(char => char === 'l');
console.log(allL); // ['l','l','l']

// slice → extract part of string
console.log(text.slice(0, 5)); // 'hello'

// substring → extract part of string
console.log(text.substring(6, 11)); // 'world'



// Number searching 

// Number searching
const numbers22 = [5, 10, 15, 20, 25];

// indexOf → find the index of a number
console.log(numbers22.indexOf(15)); // 2
console.log(numbers22.indexOf(30)); // -1

// includes → check if a number exists
console.log(numbers22.includes(20)); // true
console.log(numbers22.includes(50)); // false

// find → first number greater than 12
const firstAbove12 = numbers.find(num => num > 12);
console.log(firstAbove12); // 15

// findIndex → index of first number greater than 12
const indexAbove12 = numbers.findIndex(num => num > 12);
console.log(indexAbove12); // 2

// filter → all numbers greater than 12
const allAbove12 = numbers.filter(num => num > 12);
console.log(allAbove12); // [15, 20, 25]



// Object searching

// Object searching
const people3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// find → first person older than 28
const firstOlderThan28 = people3.find(person => person.age > 28);
console.log(firstOlderThan28); // { name: "Bob", age: 30 }

// findIndex → index of first person older than 28
const indexOlderThan28 = people3.findIndex(person => person.age > 28);
console.log(indexOlderThan28); // 1

// filter → all people older than 28
const allOlderThan28 = people3.filter(person => person.age > 28);
console.log(allOlderThan28); 
// [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// includes → does not work directly on objects, must use some or find
const hasAlice = people3.some(person => person.name === "Alice");
console.log(hasAlice); // true
