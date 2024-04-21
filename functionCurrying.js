function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
console.log(sum(1)(2)(3)); //Output: 6

/***********************************************************************************/
function sum1(a) {
    return function (b) {
        if(b) {
            return sum1(a+b);
        }
        return a;
    }
 }

console.log(sum1(1)(2)(4)(5)(6)());

/***********************************************************************************/
 function sum(...args1) {
    let total = args1.reduce((a,c) => a+c);
    return function(...args) {
        if(args.length) {
            let s = args.reduce((a,c) => a+c);
            return sum(s+total);
        }
        return total;
    }
}
console.log(sum(3, 4,1)(5, 6, 7)(7, 8,9)()); //50
/***********************************************************************************/