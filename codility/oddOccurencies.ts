function findUnpaired(A: number[]): number {
        if (!A || A.length === 0) {
        console.log("Error");
        return 0; 
    }

    if (A.length === 1) {
        return A[0] // return number on index 0
    }

    let unpaired = 0; // initialize to store the result 
    for (const num of A) { // loop trough all numbers 
        unpaired ^= num; // XOR current number with unpaired. Cancels non unique ones.
    }
    return unpaired; // return unpaired 
}


