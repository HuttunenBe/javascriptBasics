// Access first and last element
const numArray: number[] = [1, 2, 3, 4, 5];
console.log(numArray[0]); // first
console.log(numArray[numArray.length - 1]); // last
console.log(numArray.at(-1)); // alternative
console.log(numArray[numArray.length - 2]); // second last

// Access middle element
const middleElement = Math.floor(numArray.length / 2);
console.log(numArray[middleElement]);

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
