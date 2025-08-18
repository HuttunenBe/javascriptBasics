// 1. Creating an Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// 2. Accessing Elements
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 3. Adding Elements
fruits.push("mango");
fruits.unshift("strawberry");
console.log(fruits);

// 4. Removing Elements
fruits.pop();
fruits.shift();
console.log(fruits);

// 5. Finding Elements
console.log(fruits.indexOf("banana"));
console.log(fruits.includes("orange"));

// 6. Slicing and Splicing
let citrus = fruits.slice(1, 3);
fruits.splice(1, 1, "kiwi");
console.log(fruits);

// 7. Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach((fruit) => console.log(fruit));

// 8. Other Useful Methods
console.log(fruits.join(", "));
console.log(fruits.sort());
console.log(fruits.reverse());
