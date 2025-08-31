// 1. Creating an Array

let fruits = ["Durian", "Banana", "Apple", "Grapes"];

// 2. Accessing Elements

console.log(fruits[0]);
console.log(fruits.length - 1);

// 3. Adding Elements

fruits.push("Mango"); //At the end!
fruits.unshift("Strawberry"); //At beginning!
fruits.splice(1, 0, "Mango");

let numbers = [1, 2, 3];
let newNumbers = numbers.concat(4, 5);

console.log(newNumbers); // [1, 2, 3, 4, 5]

// 4. Removing Elements

fruits.pop(); // Removes last one
fruits.shift(); // Removes last one
fruits.splice(1, 1); // Use for other than last and first
let newFruits = fruits.filter((fruit) => fruit !== "Banana"); // Makes new array

let newArray = fruits.indexOf("Banana");

if (index !== -1) {
  fruits.splice(newArray, 1);
}

console.log(fruits);

// 5. Finding Elements

console.log(fruits.indexOf("Banana"));
console.log(fruits.indexOf("Mango"));

// 6. Slicing and Splicing

let citrus = fruits.slice(1, 3);
fruits.splice(1, 1, "kiwi");
console.log(fruits);

// 7. Looping Through Arrays

const array = () => {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
};

array();

// 8. Other Useful Methods

console.log(fruits.join(", ")); // Convert array to string. Separated by ,
console.log(fruits.sort()); // Sorts arrays alphabetically
console.log(fruits.reverse()); // Reverse the order of array


//Use .map() to square each number in [1, 2, 3, 4].

const arrayMap = [1, 2, 3, 4]

const squares = array.map()

//Use .filter() to keep only even numbers.

const evenNumbers = [1, 2, 3, 4, 5, 6]
const newEvenNumbersArray =  evenNumbers.filter(number => number % 2 === 0)

console.log(newEvenNumbersArray)

//Use .reduce() to sum up an array.

const reduceArray = [1, 2, 3, 4, 5]
const newReduceArray = reduceArray.reduce()

//Use .forEach() to log each item.

const logItems = [10, 30, 30];
logArray.forEach(item => {
  console.log(item);
})

//Use .find() to find the first number greater than 3.

const findArray = [1, 2, 3, 4, 5];
const findLargerThan3 = findArray.find(num => num > 3);
console.log(findLargerThan3)

//Use .some() to check if any number is negative.

const numArray = [1, 2, -3]; 
const negativeNumber = numArray.some(num => num < 0);
console.log(negativeNumber)

//Use .every() to check if all numbers are > 0.

const allSame = numArray.every(num => num > 0);
console.log(allSame)

//Use .sort() to sort [3, 1, 4, 2] ascending.

const ascending = numArray.sort((a, b) => a - b);
console.log(ascending)

//Use .slice() to get the first 3 items.

const returnThree = numbers.sort(0, 3)
console.log(returnThree)

//Use .splice() to remove 2 items from the middle.*/

const removeNumbers = numbers.splice(2, 2)
