// String palindrome
const strs: string = "racecar";
const palindrome: boolean = strs === strs.split("").reverse().join("");
console.log(palindrome); // true

// Number array palindrome
const arrayNews: number[] = [1, 2, 3, 2, 1];
const numberPalindrome: string = arrayNews.toString();
const makePalindrome: boolean = numberPalindrome === numberPalindrome.split("").reverse().join("");
console.log(makePalindrome); // true
