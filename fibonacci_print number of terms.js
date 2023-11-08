function fibonacci(n) {
    let a = 0, b = 1, c;
    if(n === 0) return a; 
    for(let i=0; i<n; i++) {
        console.log(a);
        c = a + b;
        a = b;
        b = c;
        
    }
    
}
fibonacci(5)

/*
The above function will print number of terms that is passed in the function
Output: 
0
1
1
2
3
*/