function rotateArray(A: number[], K: number): number[] {
  const N = A.length;
  if (N === 0) return A; // empty array, nothing to rotate
  K = K % N; // if K >= N, rotate only K % N times

  const rotated: number[] = new Array(N);

  for (let i = 0; i < N; i++) {
    rotated[(i + K) % N] = A[i]; // shift element by K positions
  }

  return rotated;
}



