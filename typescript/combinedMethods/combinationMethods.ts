/*1. String + Array Combinations

These appear in parsing, counting, or transforming strings:

a) Split → Map / Filter → Join
const str = "apple,banana,orange";
const result = str.split(",")     // ["apple","banana","orange"]
                  .map(f => f.toUpperCase())  // ["APPLE","BANANA","ORANGE"]
                  .join(";");    // "APPLE;BANANA;ORANGE"


Use case: Transform or format a list of items.

b) Split → Reduce / Filter → Length / Count
const str = "a b c a a b";
const counts = str.split(" ")           // ["a","b","c","a","a","b"]
                  .reduce((acc, val) => { 
                     acc[val] = (acc[val] || 0) + 1;
                     return acc;
                  }, {});
console.log(counts);  // { a: 3, b: 2, c: 1 }


Use case: Frequency counting of words or characters.

c) IndexOf / Includes + Slice / Substring
const str = "Hello world";
if(str.includes("world")) {
  console.log(str.slice(0, str.indexOf("world"))); // "Hello "
}


Use case: Extract substring based on known patterns.

2. Array Combinations

Arrays dominate most Codility challenges.

a) Map → Reduce
const arr = [1,2,3,4];
const sumSquares = arr.map(x => x*x).reduce((a,b) => a+b, 0);
console.log(sumSquares); // 30


Use case: Transform values and combine results.

b) Filter → Map → Reduce
const arr = [1,2,3,4,5,6];
const sumEvenSquares = arr.filter(x => x % 2 === 0)
                           .map(x => x*x)
                           .reduce((a,b) => a+b, 0);
console.log(sumEvenSquares); // 56


Use case: Conditional processing of arrays.

c) Sort → Slice / Filter
const arr = [5,2,8,3];
const top2 = arr.sort((a,b) => b-a).slice(0,2);
console.log(top2); // [8,5]


Use case: Find largest/smallest N elements.

3. Object / Map Combinations
a) Object.keys + Reduce / Map
const counts = {a:3, b:2, c:5};
const keys = Object.keys(counts).filter(k => counts[k] > 2);
console.log(keys); // ["a","c"]


Use case: Filter objects by value.

b) Map + Set
const arr = [1,2,2,3,3,3];
const unique = [...new Set(arr)];
console.log(unique); // [1,2,3]


Use case: Remove duplicates.

c) Frequency Map using Object / Map
const arr = ["a","b","a","c","b"];
const freq = new Map();
arr.forEach(x => freq.set(x, (freq.get(x)||0)+1));
console.log(freq); // Map(3) {"a"=>2,"b"=>2,"c"=>1}


Use case: Count occurrences efficiently.

4. Numbers + Array Combinations
a) Math.max / Math.min with Spread
const arr = [5,2,9,1];
console.log(Math.max(...arr)); // 9
console.log(Math.min(...arr)); // 1


Use case: Find extremes without loops.

b) Reduce for sum / product
const arr = [1,2,3,4];
const sum = arr.reduce((a,b)=>a+b,0);
const product = arr.reduce((a,b)=>a*b,1);
console.log(sum, product); // 10, 24


Use case: Aggregate values.

5. String + Number Combinations
a) Char code manipulation
const str = "abc";
const codes = [...str].map(c => c.charCodeAt(0));
console.log(codes); // [97, 98, 99]


Use case: Encoding / decoding letters.

✅ Most Common Patterns in Codility

String → Split → Map/Filter → Reduce/Join

Array → Filter → Map → Reduce

Array → Sort → Slice / Max/Min

Array → Set → Spread (uniqueness)

Object / Map → Keys / Values / Entries → Filter / Reduce

Math methods + Reduce / Map

String → IndexOf / Includes + Slice / Substring*/