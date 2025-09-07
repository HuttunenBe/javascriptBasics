let fruitBasket = ["apple", "banana", "cherry"];

console.log(fruitBasket[0]); // "apple"
console.log(fruitBasket[1]); // "banana"
console.log(fruitBasket[2]); // "cherry"

console.log(fruitBasket[fruitBasket.length - 1]); // "cherry"


let number22 = 42;
console.log(number22);       // 42
console.log(number22 + 8);   // 50
console.log(number22 * 2);   // 84

let textHello = "Hello";
console.log(textHello[0]); // "H"
console.log(textHello[1]); // "e"
console.log(textHello[4]); // "o"

// Access lenght
console.log(textHello.length); // 5

// Access parts of strings
console.log(textHello.slice(0, 2)); // "He"
console.log(textHello.substring(1, 4)); // "ell"

// Object accessing

let personaa = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: 10001
  }
};

// Dot notation
console.log(person.name); // "Alice"
console.log(person.age);  // 25
//console.log(person.address.city); // "New York"

// Access using bracket notation
console.log(person["name"]); // "Alice"
console.log(person["address"]["zip"]); // 10001

