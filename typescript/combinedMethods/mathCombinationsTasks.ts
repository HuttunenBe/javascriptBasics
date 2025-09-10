// Use map to square each element in an array

array10.map((num) => num * num);

// Use map to calculate cube of each number

const cubes = array10.map(num => num ** 3);

// Use map to calculate 2^n for each element

const powers = array10.map(num => 2 ** num);

// Use filter to select numbers divisible by 3

const divi = array10.filter((num) => num % 3 === 0);

// Use reduce to sum all squares of array elements

const redu = array10.reduce((acc, num) => acc + num * num, 0); 

// Use map + reduce to sum all numbers after multiplying by 2

// Use map to calculate square root of each element

// Use filter to get numbers greater than the average of the array

// Use map to apply Math.abs to all numbers in an array

// Use reduce to find the maximum number using Math.max
