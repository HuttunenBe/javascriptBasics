// 1. Declare name, age, and city using let and const
let name = "Anna";
let age = 25;
const city = "Helsinki"; //Can't be reassigned

// 2. Reassign a let variable and try reassigning a const
age = 26;
city = "Lisbon";

// 3. Log the type of null, undefined, and a number
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 100);

console.log(typeof age);
console.log(typeof city);

// 4. Use typeof to check if a value is a string
console.log(typeof age === "string");

// 5. Create a boolean that checks if age is over 18
let isAdult = age > 18;
console.log(isAdult);

// 6. Convert a number to a string using .toString()
let number = 50;
let numberStr = number.toString();

console.log(numberStr, typeof numberStr);
console.log(numberStr);
console.log(typeof numberStr);

// 7. Convert "42" to a number
let stringNumber = "42";
let stringToNumber = Number(stringNumber);

console.log(stringToNumber, typeof stringToNumber);
console.log(typeof stringToNumber);

// 8. Create a variable without assigning it (undefined)
let undefinedVariable;

console.log(undefinedVariable, typeof undefinedVariable);

// 9. Declare a variable using var
var cityVariable = "Porto";
console.log(cityVariable);

// 11. Create a number variable and add 5 to it using +=
let numberVariable = 10;
numberVariable += 5;
console.log(numberVariable);

// 12. Creating a String
let message = "Hello world!";
console.log(message);

// 13. Accessing Characters
console.log(message[0]);
console.log(message[message.length - 1]);

// 14. Changing Case
console.log(message.toUpperCase());
console.log(message.toLowerCase());

// 15. Finding Substrings
console.log(message.indexOf("world"));
console.log(message.includes("Hello"));

// 16. Extracting Substrings
console.log(message.slice(0, 5));
console.log(message.substring(7, 12));

// 17. Replacing Text
console.log(message.replace("world", "JavaScript"));

// 18. Splitting and Joining
let words = message.split(", ");
console.log(words);
console.log(words.join(" - "));

// 19. Trimming
let trimming = "   Hello   ";
console.log(trimming.trim());
