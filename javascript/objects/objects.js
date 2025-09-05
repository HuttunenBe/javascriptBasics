// 1. Create an object – Create an object `person` with properties: `name`, `age`, and `city`

const person = {
  name: "John",
  age: 50,
  city: "New York",
};

// 2. Access a property – Log the `name` and àge` of the `person` object to the console

console.log(person.name, person.age);

// 3. Add a property – Add a new property `job` to the `person` object

person.job = "Web Developer";
console.log(person.job);

// 4. Update a property – Change the `age` property of `person` to a new value

person.age = 20;
console.log(person.age);

// 5. Delete a property – Remove the `city` property from the `person` object

delete person.city;
console.log(person.city);

// 6. Object.keys() – Use `Object.keys()` to get an array of all property names in `person`

const array = Object.keys(person);
console.log(array);

// 7. Object.values() – Use `Object.values()` to get an array of all property values in `person`

const person = {
  name: "John",
  age: 25,
  city: "Helsinki",
};

const values = Object.values(person);
console.log(values);

// 8. Check for a property – Use the `in` operator or `hasOwnProperty()` to check if `person` has a `job` property

console.log("job" in person);
console.log("age" in person);

console.log(person.hasOwnProperty("job"));

// 9. Loop through properties – Use a `for...in` loop to log all key-value pairs of `person`

for (const key in person) {
  console.log(key, person[key]);
}
// 10. Nested object – Add a nested object `address` to `person` with properties `street` and `zip`, then log `person.address.street`

const person = {
  name: "Anna",
  age: 25,
  address: {
    street: "Annankatu",
    zip: "12",
  },
};

console.log(person.address.street); // output Annankatu
