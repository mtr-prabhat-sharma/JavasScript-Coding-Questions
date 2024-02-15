function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum(1)(2)(3)); //Output: 6


function sum1(a) {
    return function (b) {
        if(b) {
            return sum1(a+b);
        }
        return a;
    }
 }

console.log(sum1(1)(2)(4)(5)());