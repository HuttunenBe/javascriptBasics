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

const array = [1, 2, 3, 4]

const squares = array.map()

//Use .filter() to keep only even numbers.

//Use .reduce() to sum up an array.

//Use .forEach() to log each item.

//Use .find() to find the first number greater than 3.

//Use .some() to check if any number is negative.

//Use .every() to check if all numbers are > 0.

//Use .sort() to sort [3, 1, 4, 2] ascending.

//Use .slice() to get the first 3 items.

//Use .splice() to remove 2 items from the middle.*/
