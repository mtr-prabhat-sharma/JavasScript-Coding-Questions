/* JavaScript function to calculate factorial using recursion */
function factorialusingRecursion(n) {
    if(n < 1 || n === 1) {
        return 1;
    } else {
        return n * factorialusingRecursion(n-1);
    }
}
console.log(factorialusingRecursion(5))
