function binaryGap(N: number): number {
if (N <= 0) return 0;
  let binary: string = N.toString(2);      // convert to binary
  let gaps: string[] = binary.split("1");  // split at '1'

  gaps.pop(); // remove last element because trailing zeros don't count as a gap

  let max: number = 0;
  for (let gap of gaps) {
    if (gap.length > max) {
      max = gap.length;  // update max
    }
  }

  return max;  // return after checking all gaps
}

console.log(binaryGap(529)); // Output: 4




// Find binary cap 

let binarys: string = N.toString(2);
let gapas: string [] = binarys.split("1")

gapas.pop(); 

let maxim: number = 0; 
for (let gap of gapas) {
  if (gap.length > maxim){
    maxim = gap.length;
    
  }
}
  return maxim
}













let binary: string = N.toString(2);
let gaps: string [] = binary.split("1");

gaps.pop();

let max: number = 0;
for (gap of gaps){
  if (gap.length > max)
    max = gapas.lenght
}



