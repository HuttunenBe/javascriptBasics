/**An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2025 by Codility Limited. All Rights Reserv */


function findMissingElement(A) {
  const N = A.length; // get lenghts
  const expectedNumbers = []; // ready for numbers

  // Create an array with all numbers from 1 to N+1
  for (let i = 1; i <= N + 1; i++) { // add +1
    expectedNumbers.push(i); // add to expectedNumers array
  }

  // Check which number is missing
  for (let i = 0; i < expectedNumbers.length; i++) {
    if (!A.includes(expectedNumbers[i])) { // checks if A includes the number
      return expectedNumbers[i]; // return the missing number immediately 
    }
  }
  
  return -1; // just in case, though there should always be a missing number
}


