// 1. Write a function to return the square of a number.

const square = (number) => {
  return number * number;
};

square(10);
console.log(square(11));

// 2. Write a function that returns true if a number is even.

const numEven = (number) => {
  return number % 2 === 0;
};

console.log(numEven(10));
console.log(numEven(9));

// 3. Create a function that greets a user by name.

function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Alisa"));

// 4. Write a function with a default parameter.

function defaultParameter(name = "name") {
  return `Hello ${name}`;
}

console.log(defaultParameter());
console.log(defaultParameter("John"));

// 5. Convert a function to arrow function syntax.

const defaultParameterArrow = (name = "name") => {
  return `Hello ${name}`;
};

console.log(defaultParameterArrow()); // "Hello name"
console.log(defaultParameterArrow("John")); // "Hello John"

// 6. Return the max of two numbers.

const maxNum = (num1, num2) => {
  return Math.max(num1, num2);
};

// With If-statement

const maxNumIf = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(maxNumIf(20, 40));

// 7. Create a function that returns the length of an array.

const lengthArray = (array) => {
  return array.length;
};

console.log(lengthArray(["Banana", "Tomato", "Kiwi"]));

// 8. Write a function that returns the first letter of a string.

const firstLetter = (letterString) => {
  return letterString.charAt(0);
};

const firstLetterSecond = (letterString) => {
  return letterString[1];
};

console.log(firstLetter("String"));
console.log(firstLetter("String"));

const lastLetter = (letterString) => {
  return letterString[letterString.length - 1];
}; // Last letter

console.log(lastLetter("String"));

// 9. Call a function inside another function.

const doubleFunction = () => {
  function double() {
    console.log("Double it!");
  }
  double();
};

doubleFunction();

// 10. Return an object from a function.

function objectReturn() {
  let object = {
    name: "John",
    age: 40,
    animal: "dog",
  };
  return object;
}

console.log(objectReturn());
console.log(objectReturn().name);

const person = objectReturn(); // Store object in variable to access animals
console.log(person.animal);
