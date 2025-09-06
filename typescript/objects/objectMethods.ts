// - Object.keys, Object.values, Object.entries, hasOwnProperty, key in obj, 

// Object.keys(obj) - Get array of all keys 

interface Persons {
    name: string;
    age: number;
    city: string;
}

const objects1: Persons = { name: "Julius", age: 40, city: "Helsinki" };
const keys: string[] = Object.keys(objects1);
console.log(keys); // ["name", "age", "city"]

// Loop over keys 
keys.forEach(key => {
    console.log(key, objects1[key as keyof Persons]);
}); // getting all info 

// Object.values(obj) - get values from object
const objectValues: (string | number)[] = Object.values(objects1);
console.log(objectValues);

// Object.entries(obj) - getting array with [key, value]
const entries: [string, string | number][] = Object.entries(objects1);
console.log(entries);

// hasOwnProperty(key) - check for property 
console.log(objects1.hasOwnProperty('name')); // true

// key in obj - check for keys 
console.log('name' in objects1); // true
