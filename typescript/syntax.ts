// Basic types

const firstName: string = "John";
const birthYear: number = 2000;
const isTrue: boolean = true;

console.log(firstName, birthYear, isTrue);

// Array

const a: number[] = [1, 2, 3, 4];
let value: number = 0;

for (const num of a) {
  value += num;
}

// String

const string: string = "hello";
const toUpperCase = string.toUpperCase();

// Object

type Person = {
  name: string | number;
  age: number;
  isStudent?: boolean; //(optional);
  hobby?: any;
};

const person: Person = {
  name: "Jack",
  age: 30,
  isStudent: false,
};

// Function

function sum2(a: number, b: number): number {
  return a + b;
};

console.log(sum2(2, 3)); // 5

// Array copy

const arr: number[] = [1, 2, 3];
const arrCopy: number[] = [...arr];

// Array merge/combine

const as: number[] = [1, 2];
const bs: number[] = [3, 4];
const mergedArray: number[] = [...as, ...bs];
console.log(mergedArray);

// Array destructuring

const numbersA: number[] = [1, 2, 3, 4, 5];
const [firstt, second, ...restt]: number[] = numbersA;

// Function parameters

function syntax(a: number, b: number): number {
  return a + b;
};

function syntaxArray(a: number | string, b: number | string): string {
  return a.toString() + b.toString();
};

function syntaxArray2(a: any, b: any): any {
  return a + b;
};

// Optional parameter with ?

function greet(name: string, title?: string): string {
  return name;
};

// Default parameter

function multiply(a: number, b: number = 2): number {
  // add default value in case argument is not passes
  return a + b;
};

// Rest parameters

function sumAll(...nums: number[]): number {
  return nums.reduce((total, num) => total + num, 0);
};

// Union types -> Allow arguments of different types

function alien(a: number | string, b: number | string): string {
  return a.toString() + b;
};
