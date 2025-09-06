// Number to string
let num10: number = 5;
console.log(num10.toString());

// Number array to string array
const numbers2: number[] = [1, 2, 3, 4];
const stringArray: string[] = numbers2.map((num: number) => num.toString());
console.log(stringArray);

// String to number
let string2: string = "2";
console.log(Number(string2));
console.log(parseInt(string2));

// String array to number array
const stringNumbers: string[] = ["10", "20", "30", "40"];
const numsArray: number[] = stringNumbers.map((str: string) => parseInt(str));
console.log(numsArray);
