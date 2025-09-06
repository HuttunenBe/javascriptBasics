const str: string = "Matrix";

// Access characters
console.log(str[0]);
console.log(str.charAt(0));
console.log(str.charAt(2));
console.log(str[str.length - 1]);

// Middle character
const middleElementString: string = str[Math.floor(str.length / 2)];
console.log(middleElementString);

// Substring & slice
const substring: string = str.slice(0, 3);
console.log(substring);
console.log(str.slice(3));

// Replace characters
const replace: string = str.replace("M", "N");
console.log(replace);

const replaceAll: string = str.replace(/a/g, "o");
console.log(replaceAll);

// Change specific character (create new string)
const characterChange: string = "M" + str.slice(1);
console.log(characterChange);

// Split & join
const nameString: string = "John Matilda Joao";
const splitArray: string[] = nameString.split(" "); // words
const splitArray2: string[] = nameString.split(""); // characters
console.log(splitArray, splitArray2);

const joinArray: string[] = ["Zebra", "Cow", "Bear"];
const joined: string = joinArray.join();
const joined2: string = joinArray.join(" - ");
const joined3: string = joinArray.join("");
console.log(joined, joined2, joined3);

// Uppercase/lowercase
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

// Sorting in alphabetical order
const fruit: string[] = ["banana", "apple", "mango"];

fruit.sort(); // Sort ascending
console.log(fruit); // apple, banana, mango

fruit.sort().reverse(); // descending
console.log(fruit);

// localeCompare
fruit.sort((a, b) => a.localeCompare(b)); // ascending
console.log(fruit);

fruit.sort((a, b) => b.localeCompare(a)); // descending
console.log(fruit);

// Working with mixed arrays and objects
const mixedArray: (string | number | boolean | { name: string })[] = [
  "Hello",
  42,
  true,
  { name: "Antero" },
];

mixedArray.forEach(item => console.log(item));
