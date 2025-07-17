function fibonacci(n) {
    let fibArr = [0,1];
    for(let i=2;i<n;i++) {
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }
    console.log(fibArr.join(','));
    
}
fibonacci(7)

/*
Output: 0,1,1,2,3,5,8
*/

// It can be achieved using while loop as well which is more prefered 