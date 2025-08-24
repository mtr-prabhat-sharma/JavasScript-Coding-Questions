let n = 2546;
function sumOfDgits(num) {
    let sum = 0;
    while(num > 0) {
        let lastDigit = num % 10;
        sum = sum + lastDigit;
        num = Math.floor(num / 10);
    }
    console.log(sum) // 17
}
sumOfDgits(n)

******************************************************************
// Without using loop

function sumOfDigits(num) {
    if (num === 0) {
        return 0; // base case
    }
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

let n = 2546;
console.log(sumOfDigits(n)); // 17
