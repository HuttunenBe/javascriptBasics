function frogJumps(X: number, Y: number, D: number): number {
    if (X >= Y) return 0; // already at or past the target

    const distanceNeeded = Y - X;         // how far the frog needs to go
    return Math.ceil(distanceNeeded / D); // divide to get the return ceil 
}

