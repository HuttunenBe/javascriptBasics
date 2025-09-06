// Manipulating numbers 

// toFixed
const num1: number = 12.3456;
console.log(num1.toFixed(2)); // 12.35 - rounds to 2 decimals

// toString 
const num2: number = 255;
console.log(num2.toString()); // Convert number to string
console.log(num2.toString(16)); // ff getting the hexadecimal

// toPrecision 
const num3: number = 123.456;
console.log(num3.toPrecision(4)); // "123.5" 4 digits and to string

// valueOf
const num4: Number = new Number(42);
console.log(num4.valueOf()); // 42 returns primitive number from Number object

// Math.round 
console.log(Math.round(4.6)); // 5 - rounds to nearest 
console.log(Math.round(4.4)); // 4 - rounds to nearest 

// Math.ceil - always upwards to nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.1)); // -4
console.log(Math.ceil(-4.9)); // -4

// Adding decimals 
const num5: number = 12;
console.log(num5.toFixed(2)) // 12.00 as a string 

const num6: number = 12.567;
console.log(num6.toFixed(0)); // 13 as string 

const fixed: number = Number(num6.toFixed(2)); // Keeping it number
console.log(fixed); 

const fixedParse: number = parseFloat(num6.toFixed(2)); // Keeping it number with parseFloat
console.log(fixedParse); 

// Round to nearest number 
let number: number = 12.34
let roundedNumber: number = Math.round(number)
console.log(roundedNumber)

console.log(Math.round(4.6)); // 5

// Round down 
console.log(Math.floor(4.9)); // 4

// Round up no matter how small
console.log(Math.ceil(4.1)); // 5

// Remove decimals 
console.log(Math.trunc(7.89)); // 7

// Absolute value - removes negative value 
console.log(Math.abs(-15)); // 15

// Power ? 
console.log(Math.pow(2, 3)); // 8  → 2³ pow(numberToRaise, powerYouRaiseitTo) 

// Square root 
console.log(Math.sqrt(16)); // 4 calculates square root 4 * 4 = 16

// Find max and find min 
console.log(Math.max(10, 5, 8)); // 10
console.log(Math.min(10, 5, 8)); // 5

// Find min and max from array 
let numbersArray4: number[] = [10, 20, 30, 40, 50];

console.log(Math.max(...numbersArray4)); // 50
console.log(Math.min(...numbersArray4)); // 10

// Math random 
console.log(Math.random()); // always returns a decimal 

// Random number between 0 and max
const max: number = 10;
const random: number = Math.random() * max;
console.log(random); // e.g., 7.384

let randomTwoDecimals: number = Number(random.toFixed(2)); // 2 decimals 
let randomInteger: number = Math.round(random); // 0 decimals
