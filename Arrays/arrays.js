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
