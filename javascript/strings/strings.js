// 1. Declare name, age, and city using let and const
let name = "Beniitta";
let age = 32;
const city = "Helsinki";

// 2. Reassign a let variable and try reassigning a const

name = "Julia";
age = 33;
city = "Porto";

// 3. Log the type of null, undefined, and a number

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof age);

// 4. Use typeof to check if a value is a string

console.log(typeof city === "string");
console.log(typeof name === "string");

let number = 25;
let boolean = true;

console.log(typeof number === "number");
console.log(typeof boolean === "boolean");

// 5. Create a boolean that checks if age is over 18

let ageLimit = 25;
let isAdult = ageLimit > 18;

console.log(isAdult);

// 6. Convert a number to a string using .toString()

let numberToString = 10;
let convert = numberToString.toString();

// 7. Convert "42" to a number

let convertToNumber = "42";
let convertedNumber = Number(convertToNumber);

// 8. Create a variable without assigning it (undefined)

let variable;

// 9. Declare a variable using var

var variableVar;

// 11. Create a number variable and add 5 to it using +=

let numberVariable = 10;
numberVariable += 5;

// 12. Create a String + Boolean

const animal = "Bison";
const isAnimalBlue = false;

// 13. Accessing Characters

const word = "Alien";
console.log(word[0]);
console.log(word[word.length - 1]);

// 14. Changing Case

console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.substring(0, 2).toLowerCase());

const upperCase = word.toUpperCase();
console.log(upperCase);

// 15. Finding Substrings

let substring = "auto mobile";
console.log(substring.includes("auto"));
console.log(substring.indexOf("auto"));

// 16. Extracting Substrings

let extractedSubstring = "Javascript basics";
console.log(extractedSubstring.substring(0, 4));
console.log(extractedSubstring.slice(4, 7));

// 17. Replacing Text

let text = "I am studying Javascript";
let newText = text.replace("Javascript", "PHP");
console.log(newText);

// 18. Splitting and Joining

let splitnJoin = "I like studying Javascript";
let splitted = splitnJoin.split(" ");
let joined = splitted.join(", ");

console.log("I like studying Javascript".split(" ").join(", "));
console.log(splitnJoin.split(" ").join(", "));

// 19. Trimming

let trim = "  John Wick  ";
let trimmedText = trim.trim();
