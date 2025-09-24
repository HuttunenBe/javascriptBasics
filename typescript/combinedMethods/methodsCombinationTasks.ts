// Use map to double each number in an array

const mapDouble = [1, 2, 3, 4];

const doubledArr = mapDouble.map((num) => num * 2);

// Use map to convert all strings in an array to uppercase

const stringToUppercase = ["hello", "world"];

const mappedString = stringToUppercase.map((str) => str.toUpperCase());

// Use filter to get only even numbers from an array

const filteredNumbers = doubledArr.filter((n) => n % 2 === 0);
console.log(filteredNumbers);

// Use filter to select strings longer than 3 characters

const longString = stringToUppercase.filter((str) => str.length > 3);
console.log(longString);

// Use reduce to sum all numbers in an array

const reducedSum = mapDouble.reduce((acc, num) => acc + num, 0);

// Use reduce to multiply all numbers in an array

const multipliedArray = mapDouble.reduce((acc, num) => acc * num, 1);

// Use map + filter to double numbers then select only numbers > 5

const result = numbers
.map((num) => num * 2)
.filter((num) => num > 5);

// Use filter + reduce to sum only even numbers

const sumEven = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);

// Use split + map + join to capitalize all letters in a string

const str = "hello world";

const capitalized = str
  .split("")            
  .map(char => char.toUpperCase()) 
  .join("");          

console.log(capitalized);
// Use Object.keys + map to create array of uppercase keys
