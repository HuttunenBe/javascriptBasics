// STRING TASKS

// 1. Get length of "Codility"
const str12: string = "Codility";
console.log(str12.length);


// 2. Convert "hello world" to uppercase and lowercase
const str13: string = "hello world";
console.log(str13.toUpperCase());
console.log(str13.toLowerCase());

// 3. Extract "world" from "Hello world" using slice
const str3: string = "Hello world";
console.log(str3.slice(6, 11));

// 4. Check if "JavaScript" contains "Script"
const str4: string = "JavaScript";
console.log(str4.includes("Script"));

// 5. Check if "TypeScript" starts with "Type" and ends with "Script"
const str5: string = "TypeScript";
console.log(str5.startsWith("Type"));
console.log(str5.endsWith("Script"));

// 6. Replace all "cat" with "dog" in "cat cat cat"
const str6: string = "cat cat cat";
console.log(str6.replaceAll("cat", "dog"));

// 7. Convert "apple,banana,orange" to array and join with "-"
const str7: string = "apple,banana,orange";
const toArray: string[] = str7.split(", ");
console.log(toArray.join("-"));

// ARRAY TASKS

// 8. Get first, last, middle elements of [10,20,30,40,50]
const arr1: number[] = [10, 20, 30, 40, 50];
console.log(arr1[0]);
console.log(arr1[length - 1]);

console.log(arr1[Math.floor(arr1.length / 2)]);

// 9. Add 60 to end, remove last, add 5 to start, remove first from [10,20,30]
const arr2: number[] = [10, 20, 30];

arr2.push(60); // add to end
arr2.pop(); // remove last
arr2.unshift(5); // add to start
arr2.shift(); // Remove first

// 10. Merge [1,2] and [3,4] into one array
const arr3: number[] = [1, 2];
const arr4: number[] = [3, 4];

const mergedArray2: number[] = [...arr3, ...arr4];

// 11. Reverse [3,1,4,2] and sort ascending
const arr5: number[] = [3, 1, 4, 2];

arr5.reverse();
arr5.sort((a, b) => a - b);

// 12. Double all numbers in [1,2,3,4] using map
const arr6: number[] = [1, 2, 3, 4];
const mappedArr6 = arr6.map((num) => num * 2);
console.log(mappedArr6);

// 13. Get numbers > 3 from [1,2,3,4,5] using filter
const arr7: number[] = [1, 2, 3, 4, 5];
const filteredArr7 = arr7.filter((num) => num > 3);

// 14. Sum all numbers in [1,2,3,4,5] using reduce
const arr8: number[] = [1, 2, 3, 4, 5];
const reducedArr8 = arr8.reduce((result, num) => result + num, 0);

// 15. Check if 3 exists in [1,2,3,4,3] and find first & last index
const arr9: number[] = [1, 2, 3, 4, 3];

console.log(arr9.includes(3)); // true
console.log(arr9.indexOf(3)); // first index
console.log(arr9.lastIndexOf(3)); // last index

console.log(arr9[0]); // first element
console.log(arr9[-1]); // last element

// MATH TASKS

// 16. Round 4.6, floor 4.6, ceil 4.1
const num11: number = 4.6;

console.log(Math.round(num11)); // 5 nearest int
console.log(Math.floor(num11)); // 4 round down
console.log(Math.ceil(num11)); // 5 always up
console.log(Math.trunc(num11)); // remove decimal without rounding up or down

const num13: number = -2;
console.log(Math.abs(num13)); // make negative into positive
console.log(num11.toFixed(2)); // change decimals

// 17. Generate random number between 0 and 10
const max1: number = 10;
const randomNumber = Math.floor(Math.random() * (max1 + 1));
console.log(randomNumber);

// Math.floor -> round down to get whole number
// Math.random generates a decimal between 0 and 1. -> 0.12, 0.45
// (max1 + 1) multiply by 11 to expand the rage over
// floor to make it number fomr 0-10

// 18. Calculate 2^3 and sqrt of 16
const base: number = 2;
const exponent: number = 3;
const value2: number = 16;

const power = Math.pow(base, exponent);
console.log(power); // 8

const power2 = base ** exponent;
console.log(power2); // 8

const sqrtValue = Math.sqrt(value2); // return square root
console.log(sqrtValue); // 4

// ^math notation.

// Find unique number with XOR

const arr22: number[] = [4, 1, 2, 1, 2];
let unique = 0;

for (const num of arr22) {
  unique ^= num;
}

console.log(unique); // 4

// 19. Find min and max in [5,2,9,1,7]
const arr10: number[] = [5, 2, 9, 1, 7];
const maxValue = Math.min(...arr10);
const minValue = Math.max(...arr10);

console.log(maxValue);
console.log(minValue);

// Min and max with for of loop

let minValue2 = arr10[0]; // initialize for start comparison points
let maxValue2 = arr10[0];

for (let value of arr10) {
  if (value < minValue2) minValue2 = value;
  if (value > maxValue2) maxValue2 = value;
}

console.group(minValue2);
console.log(maxValue2);

// map Min and Max

let minValueMap = Math.min(...arr10.map((num) => num));
let maxValueMap = Math.max(...arr10.map((num) => num));

console.log(minValueMap);
console.log(maxValueMap);

// 20. Get absolute value of -15 and 10 % 3
const num33: number = -15;
const num44: number = 10;

const absoluteValue = Math.abs(num33); // make positive
const remainderValue = num44 % 3; // 1
console.log(absoluteValue);
console.log(remainderValue);

// Absolute value = Positive numbers stay same, negative become positive, keep decimals

// Using remainder & chekc if even or odd

const num31: number = 7;
const num32: number = 12;

console.log(num31 % 2 === 0 ? "even" : "odd");
console.log(num32 % 2 === 1 ? "odd" : "even");

if (num31 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// boolean version

const isEven = num31 % 2 === 0;
console.log(isEven); // true/false

// filter version

const arr11: number[] = [1, 2, 3, 4, 5, 6];
const even = arr11.filter((value) => value % 2 === 0);
const odd = arr11.filter((value) => value % 2 !== 0);

console.log(even); // 2,4,6
console.log(odd); // 1,3,5

// map version

const arr23: number[] = [7, 12, 5, 8];

const evenOrOdds = arr23.map((num) => num + (num % 2 === 0 ? "even" : "odd"));
console.log(evenOrOdds);

const evenOrOdds2 = arr23.map((num) => num % 2 === 0);
console.log(evenOrOdds);
