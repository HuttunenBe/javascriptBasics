// Number to string
let num = 5;
console.log(num.toString());

// Number array to string array
const numbers2: number[] = [1, 2, 3, 4];
const stringArray: string[] = numbers2.map((num) => num.toString());

// String to number
let string2 = "2";
console.log(Number(string2));
console.log(parseInt(string2));

// String array to number array
const stringNumbers: string[] = ["10", "20", "30", "40"];
const numsArray: number[] = stringNumbers.map((str) => parseInt(str));
