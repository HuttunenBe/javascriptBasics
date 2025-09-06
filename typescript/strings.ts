const str = "Matrix";

// Access characters

console.log(str[0]);
console.log(str.charAt(0));
console.log(str.charAt(2));
console.log(str[str.length - 1]);

// Middle character

const middleElementString = str[Math.floor(str.length / 2)];

// Substring & slice

const substring = str.slice(0, 3);
console.log(str.slice(3));

// Replace characters

const replace = str.replace("m", "n");
const replaceAll = str.replace(/a/g, "o");

// Change specific character (create new string)

let characterChange = "M" + str.slice(1);

// Split & join

const nameString: string = "John Matilda Joao";
const splitArray = nameString.split(" "); // words
const splitArray2 = nameString.split(""); // characters

const joinArray: string[] = ["Zebra", "Cow", "Bear"];
const joined = joinArray.join();
const joined2 = joinArray.join(" - ");
const joined3 = joinArray.join("");

// Uppercase/lowercase

str.toLocaleUpperCase();
str.toLocaleLowerCase();

// Sorting in alphabetical order

const fruits: string[] = ["banana", "apple", "mango"];

fruits.sort(); // Sort ascending
console.log(fruits); // apple, banana, mango

fruits.sort().reverse(); // descending
console.log(fruits);

// localeCompare

fruits.sort((a, b) => a.localeCompare(b)); // ascending
fruits.sort((a, b) => b.localeCompare(a)); // descending

// Working with mixed arrays and objects
