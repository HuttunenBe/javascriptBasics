// 1. Check if a number is even or odd

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(evenOrOdd(5));

// 2. Check if a string is empty

function emptyString(string) {
  if (string === "") {
    return "String is empty";
  } else {
    return "String is not empty";
  }
}

emptyString("Hello there I hope you're having a good day");

// 3. Compare two numbers and log which is larger

const largerNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  } else {
    return num1 + num2;
  }
};

console.log(largerNumber(10, 11));

// 4. If-else chain for age group

// 5. Check if a number is divisible by 5

// 6. Check password length

// 7. Use === to compare two variables

const compareVariable = (value1, value2) => {
  if (value1 === value2) {
    return "Same!";
  } else {
    return "Oh no!";
  }
};

console.log(compareVariable(1, 6));

// 8. Use logical AND (&&)

const ageCheck = (age, hasId) => {
  if (age >= 18 && hasId) {
    console.log("You can enter");
  } else {
    console.log("You cannot enter");
  }
};

ageCheck(20, true);
ageCheck(16, true);

const age = 20;
const hasId = true;

if (age >= 18 && hasId) {
  console.log("You can enter");
} else {
  console.log("You cannot enter");
}

const isLoggedIn = true;
const welcomeMessage = isLoggedIn && "Welcome back!";
console.log(welcomeMessage);

// 9. Use logical OR (||)

// 10. Use switch case

function whatDay(day) {
  switch (day) {
    case "day1":
      console.log("Monday");
      break;
    case "day2":
      console.log("Tuesday");
      break;
    case "day3":
      console.log("Wednesday");
      break;
    default:
      console.log("Friday");
      break;
  }
}

whatDay("day1");
whatDay();

// 11. Use a ternary operator

const toggle = true;
const ternary = toggle ? "true" : "false";

console.log(ternary);

const modal = false;
const checkModal = modal ? "open" : "closed";

console.log(checkModal);

const ternaryTest = true;
const checkTernary = ternaryTest ? "true" : "false";

//const age = 20;
//const hasId = true;

age >= 18 && hasId
  ? console.log("You can enter")
  : console.log("You cannot enter");
