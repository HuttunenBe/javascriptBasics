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
  name: string;
  age: number;
  isStudent: boolean;
};

const person: Person = {
  name: "Jack",
  age: 30,
  isStudent: false,
};
