// String palindrome
const strs: string = "racecar";
const palindrome: boolean = strs === strs.split("").reverse().join("");
console.log(palindrome); // true

// Number array palindrome
const arrayNews: number[] = [1, 2, 3, 2, 1];
const numberPalindrome: string = arrayNews.toString();
const makePalindrome: boolean = numberPalindrome === numberPalindrome.split("").reverse().join("");
console.log(makePalindrome); // true


// Print all elements of an array
const arrw = [2, 4, 6, 8, 10];

console.log("Array elements:");
for (let i = 0; i < arrw.length; i++) {
    console.log(arrw[i]);
}

for (const element of arrw) {
    console.log(element);
}

// Sum all elements in an array

let sum = 0;
for (let i = 0; i < arrw.length; i++) {
    sum += arrw[i];
}

let sumn = 0;
for (const element of arrw) {
    sumn += element;
}

// Multiply all elements in an array

let product = 1;
for (let i = 0; i < arrw.length; i++) {
    product *= arrw[i];
}

let product2 = 1;
for (const element of arrw) {
    product2 *= element;
}

// Find the minimum element

// Find the maximum element

// Find the second largest element

// Count even numbers in an array

// Count odd numbers in an array

// Count numbers greater than a target value

// Reverse an array


// Print each character of a string

// Count vowels in a string

// Count consonants in a string

// Convert string to uppercase using a loop

// Convert string to lowercase using a loop

// Reverse a string

// Check if a string is a palindrome

// Count number of digits in a string

// Split string into array of words

// Join array of words into a string


// Print all keys of an object

// Print all values of an object

// Sum all values of an object

// Find keys with value greater than a target

// Convert object keys to uppercase

// Convert object values into an array

// Count number of properties in an object

// Check if object has a specific key


// Use forEach to print all array elements

// Use forEach to sum all array elements

// Use map to double each element

// Use filter to select even numbers

// Use reduce to sum all numbers

// Use map + filter to double numbers then select numbers > 5

// Use filter + reduce to sum only even numbers

// Use split + map + join to uppercase each character of a string

// Use Object.keys + map to uppercase keys

// Use Object.values + reduce to sum values

// Use map to square each element

// Use map to cube each element

// Use map to calculate 2^n for each element

// Use filter to select numbers divisible by 3

// Use reduce to sum squares of elements

// Use map + reduce to sum elements after multiplying by 2

// Use map to calculate square root of each element

// Use filter to select numbers greater than the average

// Use map to apply Math.abs to all numbers

// Use reduce to find maximum number using Math.max

// Handle empty array: return 0 or null

// Handle single-element array

// Handle negative numbers

// Handle duplicates

// Handle all same values

// Handle array with zeros

// Handle mixed positive, negative, and zero values

// Handle array of strings with numbers as strings

// Handle object with missing or undefined keys

// Handle nested arrays
