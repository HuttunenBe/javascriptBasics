// Spread and rest

// Copy an array

const arrayCopy: number[] = [1, 2, 3];

const arrayCopy2: number[] = [...arrayCopy]; // Make a copy
console.log(arrayCopy2); // 1, 2 3

// Merge two arrays

const ab: number[] = [1, 2];
const bc: number[] = [3, 4]
const merge: number[] = [...ab, ...bc];
console.log(merge); // 1, 2, 3, 4

// Copy and object

interface Pet { // Start with interface for typescript
  name: string;
  pet: string;
}

const obj = { name: "Laura", pet: "dog" };
const objCopy = { ...obj };
console.log(objCopy); // name: Laura, pet: dog

// Merge two objects

const obj2 = { fruit: "banana", drink: "fanta" };
const obj3 = { fruit: "mango", drink: "Sprite" };
const mergedObj = { ...obj2, ...obj3 }; // fruit mango, drink fanta

const obj4 = { x: 1, y: 2 };
const obj5 = { y: 10, z: 3 };
const mergedObj2 = { ...obj4, ...obj5 };
console.log(mergedObj2); //  x: 1, y: 10, z: 3

const obj6 = { x: 1, y: 3 };
const obj7 = { z: 1, r: 3 };
const mergedObj3 = { ...obj6, ...obj7 };
console.log(mergedObj3); // x: 1, y: 3, z: 1, r: 3

// Add elements to an array without modifying the original

const nu: number[] = [1, 2, 3, 4];
const newNu: number[] = [...nu, 5];
console.log(newNu);

// Collect remaining array elements

const [first, ...rest] = nu;
console.log(first); // 10
console.log(rest); // 20, 30, 40

// Collect remaining object properties

const books = { title: "Great Gatsby", year: 1980, price: 20 };
const { title, ...otherProps } = books;
console.log(title); // Great Gatsby
console.log(otherProps); // year 1980, price 20

// Decstructuree array with rest

const numbersRest = [1, 2, 3, 4, 5];

const [x, y, ...restNumbers] = numbersRest;

console.log(x); // 1
console.log(y); // 2
console.log(restNumbers); // 3, 4, 5
