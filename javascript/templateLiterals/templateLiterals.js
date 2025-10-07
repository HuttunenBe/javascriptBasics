/*Create a greeting using template literals.*/

const greeting = `Hello I am coding Javascript`;

/*Create a multi-line string.*/

const multiLine = `text here and here 
and here and here 
and here and here`;

/*Include a calculated value inside the template.*/

const calculatedValue = `This is ${1 + 2}`;

/*Interpolate object properties.*/

const animal = {
  name: "John",
  color: "Brown",
  type: "Dog",
};

console.log(`${animal.name} is a ${animal.color} ${animal.type}`);

/*Combine strings and expressions.*/

/*
Write a function that returns a sentence using template literals.
*/

/*Compare string + string vs template.


function strings = (animal, color) => {
    return `This ${animal} is ${color}`
    }

function string = (animal, color) => {
    return "This" + animal + "is" + color;
    }


strings ("fox", "orange")
string ("capybara", "brown")

Generate HTML markup with template literals.


Use backticks to avoid escaping quotes.

Use template literals in console logs.*/

let surname = "Beniitta";
console.log(`Hello ${surname}`);
