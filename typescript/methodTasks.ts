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

// Reverse
arr5.reverse();

// Sort ascending
arr5.sort((a, b) => a - b);

// 12. Double all numbers in [1,2,3,4] using map
const arr6: number[] = [1, 2, 3, 4];

// 13. Get numbers > 3 from [1,2,3,4,5] using filter
const arr7: number[] = [1, 2, 3, 4, 5];

// 14. Sum all numbers in [1,2,3,4,5] using reduce
const arr8: number[] = [1, 2, 3, 4, 5];

// 15. Check if 3 exists in [1,2,3,4,3] and find first & last index
const arr9: number[] = [1, 2, 3, 4, 3];

// MATH TASKS

// 16. Round 4.6, floor 4.6, ceil 4.1
const num11: number = 4.6;
const num22: number = 4.1;

// 17. Generate random number between 0 and 10
const max1: number = 10;

// 18. Calculate 2^3 and sqrt of 16
const base: number = 2;
const value2: number = 16;

// 19. Find min and max in [5,2,9,1,7]
const arr10: number[] = [5, 2, 9, 1, 7];

// 20. Get absolute value of -15 and 10 % 3
const num33: number = -15;
const num44: number = 10;
