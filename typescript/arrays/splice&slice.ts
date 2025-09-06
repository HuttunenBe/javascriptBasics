// Slice -> doesn't modify the current array

// Slice/New -> You are performing operations like slice, map, filter, concat, or the spread operator [...arr].

// Splice/Modify -> You are performing operations like push, pop, shift, unshift, splice, sort, reverse.

// Syntax array.slice(startIndex, endIndex)

const numb: number[] = [1, 2, 3, 4, 5]; // start from before and ends

const task1: number[] = numb.slice(1, 4);
console.log(task1); // 2, 3, 4 -> specific

const task2: number[] = numb.slice(2);
console.log(task2); // 3, 4, 5 -> up

// Negatives

const task3: number[] = numb.slice(-2);
console.log(task3); // 4, 5

// Tasks with slice
// Extract the first 3 elements of [10, 20, 30, 40, 50].

const elements: number[] = [10, 20, 30, 40, 50];
console.log(elements.slice(0, 3));

// Get the last 2 elements of ["a", "b", "c", "d"].

const lastElements: string[] = ["a", "b", "c", "d"];
console.log(lastElements.slice(2, 4));

// Extract elements from index 1 to 3 of [5, 10, 15, 20, 25].

const extractElements: number[] = [5, 10, 15, 20, 25];
console.log(extractElements.slice(1, 4));

// Splice() modify original array. Add, remove or replace elements

// Syntax
// array.splice(startIndex, deleteCount(if needed), ...itemsToAdd)

// Removing elements

const numbers10: number[] = [1, 2, 3, 4, 5];
numbers10.splice(1, 2); // Starts from index 1 and removes 2 elements
console.log(numbers10); // 1, 4, 5

// Adding elements

const numbers11: number[] = [1, 2, 3];
numbers11.splice(1, 0, 10, 20); // insert at index 1, deleteCount 0
console.log(numbers11); // 1, 10, 20, 2, 3

// Replacing elements

const numbers12: number[] = [1, 2, 3, 4];
numbers12.splice(1, 2, 8, 9); // replace 2 elements from index 1
console.log(numbers12); // 1, 8, 9, 4

// Negative startIndex -> Counts from end

numbers12.splice(-1, 1); // remove last element
console.log(numbers12); // [1, 8, 9]

// Tasks with splice

// Remove the second element from [10, 20, 30, 40].

const array8: number[] = [10, 20, 30, 40];
array8.splice(1, 1); // remove 1 element at index 1
console.log(array8); // 10, 30, 40

// Replace elements at index 1-2 with [100, 200] in [1,2,3,4,5].

const array9: number[] = [1, 2, 3, 4, 5];
array9.splice(1, 2, 100, 200);
console.log(array9); // 1, 100, 200, 4, 5

// Insert [7,8] at index 2 in [1,2,3,4].

const array10: number[] = [1, 2, 3, 4];
array10.splice(2, 0, 7, 8);
console.log(array10); // 1, 2, 7, 8, 3, 4

// Remove last element using negative index.
array10.splice(-1, 1);
console.log(array10);

// Replace the last 2 elements in [5,6,7,8,9] with [10].
const array12: number[] = [5, 6, 7, 8, 9];
array12.splice(-2, 2, 10); // start remember!
console.log(array12);
