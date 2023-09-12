/*
 * Create the function factorial here
 */
function factorial(n) {
    let fact = n;
    for (let i=n-1; i>0; i--) {
        fact = fact*i;
    }
    return fact;
}