//  Sorting Tasks

// Task 1: Sort numbers ascending (check duplicate numbers)

let nums1: number[] = [10, 5, 5, 20];
nums1.sort((a, b) => a - b);
console.log(nums1);

// Task 2: Sort an empty array (edge case: empty array)

let nums2: number[] = [];
nums2.sort((a, b) => a - b);
console.log(nums2);

// Task 3: Sort strings alphabetically (check case sensitivity)
let fruitsArray: string[] = ["apple", "Banana", "cherry"];

fruitsArray.sort();
console.log(fruitsArray);

// Task 4: Sort objects by age (check handling of duplicate property values)

let people: { name: string; age: number }[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

// 2️⃣ Searching Tasks

// Task 5: Find index of a number that exists
let arr: number[] = [3, 7, 1, 9];
console.log(arr.indexOf(3));

// Task 6: Find index of a number that does NOT exist (should handle -1 return)

console.log(arr.indexOf(11));

let indexNotTrue = arr.indexOf(6);
if (indexNotTrue === -1) {
  console.log("Not found");
} else {
  console.log(indexNotTrue);
}

// Task 7: Find the first number greater than 20 (edge case: no match)

let nums3: number[] = [3, 12, 7, 15];
let firstOver20 = nums3.find((num) => num > 20);
if (firstOver20 === undefined) {
  console.log("Not found");
} else {
  console.log(firstOver20);
}

// Task 8: Check if substring "Hello" exists (case sensitivity edge case)
let text: string = "hello world";

if (text.includes("Hello")) {
  console.log("Hello exists");
} else {
  console.log("Does not exists");
}

// Task 9: Access the 4th element (edge case: out of bounds)

let numero: number[] = [10, 20, 30];
console.log(numero[3]);

if (numero[3] !== undefined) {
  console.log(numero[3]);
} else {
  console.log("not found");
}

// Task 10: Access a property that does not exist (edge case: undefined)

type PersonAccess = {
  name: string;
  age: number;
  car?: string; // Optional property to safely handle missing value
};

let personAccess: PersonAccess = {
  name: "Hannu",
  age: 23,
};

if ("car" in personAccess) {
  console.log(personAccess.car);
} else {
  console.log("Car does not exist");
}
