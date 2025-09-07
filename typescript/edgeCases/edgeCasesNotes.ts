// Example 1: Searching in an array

let arra: number[] = []; // empty array

// Check if the array is empty first
if (arra.length === 0) {
  console.log("Array is empty");
} else {
  console.log(arra.indexOf(5)); // normal search
}

// You don’t have data yet, but you plan to fill it later.

let tasks: string[] = []; // will add tasks dynamically

// You want to avoid “undefined” errors when performing operations like push(), filter(), sort().

let nums: number[] = [];
nums.push(5); // works even if array was empty

//You want to provide a default value so your code can handle “no data” gracefully.

function getNames(): string[] {
  return []; // safe default instead of undefined
}

// Accessing a string character

let texts: string = "";

if (texts.length === 0) {
  console.log("String is empty");
} else {
  console.log(text[0]); // first character
}

// Accessing an object property

let person4: { name?: string } = {};

// Optional chaining prevents error
console.log(person4.name?.toUpperCase() ?? "Name not found"); //' ?? It returns the value on the right side if the left is null or undefined.
