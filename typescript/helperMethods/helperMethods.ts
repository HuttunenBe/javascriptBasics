// Extra data structure helpers 
// Add/set - Add a new key-value pair, or update an existing key.

const map: Map<string, string | number> = new Map();
map.set('name', 'Antero');   // add key 'name' with value 'Antero'
map.set('age', 27);         // add key 'age' with value 27

console.log(map);
// Map(2) { 'name' => 'Antero', 'age' => 27 }


// Get key - retrieves a value from given key 

console.log(map.get("name")) // Antero 
console.log(map.get("age")) // 27

// Has key - Check if key exists

console.log(map.has("name"))
console.log(map.has("city"))

// Delete key - delete a key-value pair 

map.delete("age");
console.log(map.has("age")); // false 

// Size - get number of key-value pairs 
console.log(map.size) // 1 because age was deleted 

// Keys - getting all keys 
console.log([...map.keys()]); // ['name']

// Values 

console.log([...map.values()]); // ['Antero']

// Entries - key-value pairs whole 

console.log([...map.entries()]) // [['name', 'Antero']]

// Creating a set 

const mySet: Set<number | string> = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);  // duplicate so will be ignored
mySet.add('hello');

console.log(mySet);  
// Set(3) { 1, 2, 'hello' }


// adding value to set 

mySet.add(3); // goes last 
console.log(mySet.has(2)) // true 
mySet.delete(1); // deletes 1 
console.log(mySet.size) // returns size 3
mySet.clear(); // remove all elements 

// Important! Set to remove duplicates

const setMethodArray: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = [...new Set(setMethodArray)];
console.log(uniqueArray); // [1, 2, 3, 4, 5]
