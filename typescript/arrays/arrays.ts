// Access first and last element
const numArray5: number[] = [1, 2, 3, 4, 5];
console.log(numArray5[0]); // first
console.log(numArray5[numArray5.length - 1]); // last
console.log(numArray5.at(-1)); // alternative
console.log(numArray5[numArray5.length - 2]); // second last

// Access middle element
const middleElement = Math.floor(numArray5.length / 2);
console.log(numArray5[middleElement]);

// Find index of specific element
const numArray2: number[] = [1, 3, 5, 7];
console.log(numArray2[2]); // output 5

// Loop through array
const loopArray: number[] = [1, 3, 4, 6];
for (let i = 0; i < loopArray.length; i++) {
  console.log(loopArray[i]);
}

// Modifying

// Replace element
const replaceArray: number[] = [1, 6, 3, 6];
replaceArray[0] = 2;
replaceArray[1] = 2;

// Splice examples
replaceArray.splice(1, 1, 5);
replaceArray.splice(0, 2, 10);
replaceArray.splice(0, 3, 10);
replaceArray.splice(0, 2, 1, 3, 5);

const spliceArray: number[] = [1, 4, 6, 7];
spliceArray.splice(0, 1, 10);

// Push & pop
const arrayNew: number[] = [1, 2, 3, 4];
arrayNew.push(2);
arrayNew.pop();

// Insert/remove using splice
arrayNew.splice(2, 1); // remove
console.log(arrayNew);

arrayNew.splice(2, 0, 3); // insert
console.log(arrayNew);

// Reverse & sort
const reverseArray = arrayNew.reverse();
arrayNew.sort((a, b) => a - b); // ascending
arrayNew.sort((a, b) => b - a); // descending


// Transform each element in an array. Multiply every number by 2

const numbers4: number[] = [1, 2, 3, 4, 5];

const doubledArray: number[] = numbers4.map(num => num * 2);
console.log(doubledArray);

// For loop with index not recommended but works

for (let i = 0; i < numbers4.length; i++) {
  numbers4[i] = numbers4[i] * 2;
}

// For loop 
const numbers5: number[] = [1, 2, 3, 4, 5];
const doubled3: number[] = [];

for (let i = 0; i < numbers5.length; i++) {
  doubled3.push(numbers5[i] * 2);
}
console.log(doubled3); 

// For each 
const numbers6: number[] = [1, 2, 3, 4, 5];
const doubled4: number[] = [];

numbers6.forEach(num => {
  doubled4.push(num * 2);
});

console.log(doubled4); // [2, 4, 6, 8, 10]
