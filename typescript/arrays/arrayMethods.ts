// Find elements 

const arrayMethods: number[] = [1, 2, 3, 4, 5];
console.log(arrayMethods[0]) // first 
console.log(arrayMethods[arrayMethods.length -1]) // last element 

const middleElement2 = Math.floor(arrayMethods.length / 2);
console.log(arrayMethods[middleElement2]); // middle element 

// Push - add to the end 

arrayMethods.push(10) // push to end one or more items
arrayMethods.pop() // remove last 
arrayMethods.unshift(0) // add to start 
arrayMethods.shift() // remove the first 

arrayMethods.slice(2, 4)
arrayMethods.splice(2, 1, 5)

// Concat merges two arrays
const az: number[] = [1, 2];
const bz: number[] = [3, 4];

console.log(az.concat(bz)); // 1,2,3,4

// Reverse 

const arrayMethods2: number[] = [1, 2, 3]
arrayMethods2.reverse();
console.log(arrayMethods2)

//Join -> convert to string 
console.log(arrayMethods2.join("-"))

// sort asc & sort desc

console.log(arrayMethods2.sort((a,b) => a-b)); 
console.log(arrayMethods2.sort((a,b) => a-b));

// map - makes new array 

const doubled = arrayMethods2.map(num => num*2);
const added = arrayMethods2.map(num => num + num);
console.log(doubled)
console.log(added)

// filter 

const greater = arrayMethods2.filter(num => num > 2);
console.log(greater) // make new array from elements that pass the condition

// forEach loop 

arrayMethods2.forEach(num => num * 2); 
arrayMethods.forEach(num => console.log(num))

// includes 

const arrayMethods3: number[] = [1, 2, 3, 4, 5, 3]
console.log(arrayMethods3.includes(3)) // check if value exists and return boolean 
console.log(arrayMethods3.some(x => x>4)) // checks if at least one element meets condition returns boolean 
console.log(arrayMethods3.every(x => x>0)); // checks if all elements meet the condition returns boolean 

console.log(arrayMethods3.indexOf(3)) // 2 - returns the first index where the value appears. If not found -1. 
console.log(arrayMethods3.lastIndexOf(3)) // 5 because in the end - returns the last index where the value appears
console.log(arrayMethods3.find(num => num > 3)) // output 4 - return first element that meets the condition 
console.log(arrayMethods3.findIndex(num => num>3)); // 3 return index of the first element that meets the condition 


const arrayMethods4: number[] = [1, 2, 3, 4, 5, 3]

// reduce 
const summed: number = arrayMethods4.reduce((acc, cur) => acc + cur, 0) // explain this
console.log(summed)

// flatting nested array 
const nested: number[][] = [[1,2],[3,4]];
console.log(nested.flat()); // 1,2,3,4

// map and flatten 
const array11: number[] = [1,2,3];
const flatMapped: number[] = array11.flatMap(num => [num, num*2]);
console.log(flatMapped); // 1,2,2,4,3,6

// Check if array 

const arr12: number[] = [1,2,3];
const flatMapped2: number[] = arr12.flatMap(x => [x, x*2]);
console.log(flatMapped2); // [1,2,2,4,3,6]
