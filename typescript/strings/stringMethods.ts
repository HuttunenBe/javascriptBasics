// length → get the length of a string

const string3 = "Bison";
console.log(string3.length);

// indexOf(substr) → find the first occurrence of a substring

const string4 = "Hello Bisons";
console.log(string4.indexOf("Bisons")); // 6
console.log(string4.indexOf("foo"));   // -1 because not fund


// includes(substr) → check if a string contains a substring

console.log(string4.includes("Bisons")); // true 
console.log(string4.includes("foo"));   // false 


// slice(start, end) → extract part of a string // Works with - 

//  startsWith() - check if string begins with spesific substring 


// string.startsWith(searchString, position)

const string33 = "Hello world";

console.log(string33.startsWith("Hello")); // true
console.log(string33.startsWith("world")); // false
console.log(string33.startsWith("world", 6)); // true, start checking from index 6

// endsWith() - Checks if a string ends with a specified substring.

// str.endsWith(searchString, length)


console.log(string33.endsWith("world")); // true
console.log(string33.endsWith("Hello")); // false
console.log(string33.endsWith("Hello", 5)); // true, consider only first 5 characters


console.log(string4.slice(0, 5)) // Hello
console.log(string4.slice(6)) // Bison
console.log(string4.slice(-5)); // "Bisons"

// substring(start, end) → extract part of a string

console.log(string4.substring(0, 5)); // Same
console.log(string4.substring(6));    // Same 

// split(separator) → split a string into an array

const string6 = "apple,banana,orange";
const fruitsString = string6.split(",");
console.log(fruitsString); // ["apple", "banana", "orange"]


// join(separator) → combine array elements into a string
const arr = ["apple", "banana", "orange"];
const string5 = arr.join(" - ");
console.log(string5); // "apple - banana - orange"

// replace(pattern, replacement) → replace first occurrence
const string7 = "I like cats";
console.log(string7.replace("cats", "dogs")); // "I like dogs"

// replaceAll(pattern, replacement) → replace all occurrences
const string8 = "I like cats and cats";
console.log(string8.replaceAll("cats", "dogs")); // "I like dogs and dogs"


// toUpperCase() → convert to uppercase

const string9 = "Hello";
console.log(string9.toUpperCase()); // "HELLO"

// toLowerCase() → convert to lowercase

const string10 = "Hello";
console.log(string10.toLowerCase()); // "hello"


// padStart(), padEnd() → pad a string to a certain length

const string12 = "5";
console.log(string12.padStart(3, "0")); // "005"

const string11 = "5";
console.log(string11.padEnd(3, "0")); // "500"


// startsWith() / endsWith() ✅ (you already have)



// concat() → join strings (less used than + or template literals)

const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2)); // "Hello World"

// localeCompare() ✅ — Compare strings according to locale

const a = "ä";
const b = "z";
console.log(a.localeCompare(b)); // negative number → a comes before b


// trim() → remove whitespace from both ends

const string13 = "   Hello   ";
console.log(string13.trim()); // "Hello"


// trimStart() → remove whitespace from start

const string14 = "   Hello   ";
console.log(string14.trimStart()); // "Hello   "


// trimEnd() → remove whitespace from end

const string15 = "   Hello   ";
console.log(string15.trimEnd()); // "   Hello"


// charAt(index) → get character at specific index

const string16 = "Hello";
console.log(string16.charAt(1)); // "e"


// str[index] → access character by index

const string17 = "Hello";
console.log(string17[1]); // "e"



// charCodeAt(index) → get Unicode code of character

const string18 = "A";
console.log(string18.charCodeAt(0)); // 65


// startsWith(prefix) → check if string starts with prefix'

const string19 = "Hello world";
console.log(string19.startsWith("Hello")); // true


// endsWith(suffix) → check if string ends with suffix

const string20 = "Hello world";
console.log(string20.endsWith("world")); // true


// lastIndexOf(substr) → find last occurrence of substring

const string21 = "banana";
console.log(string21.lastIndexOf("a")); // 5


// repeat(n) → repeat the string n times

const string22 = "ha";
console.log(string22.repeat(3)); // "hahaha"


// Changing type → String(value) or .toString() to convert other types to string

const num = 123;
console.log(String(num));  // "123"
console.log(num.toString()); // "123"

// match() - returns string for matches against regular expression 

const sentence: string = "cat bat rat mat";

// Find the first word that ends with "at"
const firstMatch = sentence.match(/\bat\b/);
console.log(firstMatch); // null → \b word boundary prevents matching "cat" exactly

// Find all words that end with "at"
const allMatches = sentence.match(/\b\w+at\b/g);
console.log(allMatches); // ["cat", "bat", "rat", "mat"]


const sentence2: string = "cat bat rat mat";

// Find all words and capture the first letter
const regex = /(\w)at/g;
const matches = sentence2.matchAll(regex);

// `matchAll()` returns an iterator, so use a loop
for (const match of matches) {
  console.log(`Full word: ${match[0]}, First letter: ${match[1]}`);
}

// Output:
// Full word: cat, First letter: c
// Full word: bat, First letter: b
// Full word: rat, First letter: r
// Full word: mat, First letter: m






// search() - Returns the index of the first match of a regular expression in a string.

const text3: string = "The rain in Spain";

console.log(text3.search(/ain/)); // 5 -> first ain at index 5
console.log(text3.search(/xyz/)); // -1 because not found



