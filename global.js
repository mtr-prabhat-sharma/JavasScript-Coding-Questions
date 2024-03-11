function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y); //1 undefined number

/**
let x is properly declared as a block-scoped variable within the function foo.

However, y is not declared using let, var, or const. As a result, it becomes an 
implicitly global variable. This means it is assigned a value of 0 and becomes 
accessible outside the function.

x++ increments the value of x to 1. This is a local variable, so it doesn't affect 
anything outside the function.

y++ increments the value of the global variable y to 1.

The return x; statement returns the local variable x which is 1.

When you log foo(), typeof x, typeof y, you get 1 (the value returned by foo), 
undefined (because x is not defined in the global scope), and number 
(because y is an implicitly global variable with a value of 1).
 */