function getMaxLessThanK(n, k) {
    let max = 0
    for (let i=1; i<n; i++) {
        for (let j=i+1; j<n+1; j++) {
            if ((i & j) < k) {
                if((i & j) > max) {
                    max = (i & j)
                }
            }
        }
    }
    return max
}