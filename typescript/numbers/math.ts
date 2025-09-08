// Binary

let decimalNumber = 13;
let binary = decimalNumber.toString(2);
console.log(binary);

let binaryString = "1101";
let decimalNum = parseInt(binaryString, 2);
console.log(decimalNum);

// square root

let numberSqrt = 16;
let sqrt = Math.sqrt(numberSqrt);
console.log(sqrt); // 4

// remainder

const number12: number = 5;
let remainder = 10 % 3; // 1

if (number12 % 2 === 0) console.log("even");
if (number12 % 2 !== 1) console.log("odd");

function remainderFunction(divide1: number, divide2: number): number {
  return divide1 % divide2;
}

// Check multiples
if (number12 % 3 === 0) console.log("multiple of 3");

// Division ny three and floor

let quotient = Math.floor(10 / 3); // 3

// Counting elements based on conditions:

const array30 = [1, 2, 3, 4, 5];
const evenCount = array30.filter((num) => num % 2 === 0).length; // 2

// Summing numbers in an array:

const sum3 = array30.reduce((acc, val) => acc + val, 0); // 15

// Comparisons

const array33 = [5, 2, 9];
let max2 = Math.max(...array33); // 9
let min2 = Math.min(...array33); // 2

// Powers, Roots, Logarithms

Math.pow(2, 3); // 8 2up3
Math.sqrt(16); // 4 square root 4 * 4 = 16
Math.log2(8); // 3
