let obj = {
    firstName: "abc",
    lastName: "xyz",
    fn: function () {
        console.log(this); // Logs the object 'obj' because 'this' refers to the object calling the method (obj)
        
    },
    fn1: () => {
        console.log(this);// Logs the global object (e.g., 'window' in a browser or 'global' in Node.js)
    },

    fn2: function () {
        let arr = [1, 2, 3, 4];
        arr.forEach((i) => {
            console.log(i + this.firstName);// Outputs: 1abc, 2abc, 3abc, 4abc
        });
    },
    fn3: function () {
        let arr = [1, 2, 3, 4];
        arr.forEach(function (i) {
            console.log(i + this.firstName);// Outputs: NaNundefined, NaNundefined, NaNundefined, NaNundefined
        });
    }
}

/*
In fn function, the this keyword refers to the object that calls the method. 
In this case, it's the obj object. So, obj.fn() logs the obj object.
*/

/*
In the fn1 arrow function, the this keyword behaves differently. It retains the value
of this from its surrounding lexical context (the context in which the arrow function
is defined). Arrow functions do not have their own this context. In this case, since 
the arrow function is defined within the global scope (outside any specific function 
or object), this refers to the global object. So, obj.fn1() logs the global 
object (window in a browser or global in Node.js).
*/

/*
In fn2, the arrow function (i) => {...} is used for the forEach callback. Arrow 
functions capture the this value from their surrounding lexical context. 
In this case, it's the this from the outer function (fn2). Therefore, this.firstName 
refers to the firstName property of the obj object. The output is as expected.
*/

/*
In fn3, a regular function (function (i) {...}) is used for the forEach callback. 
Regular functions have their own this context, and the this inside the callback is 
not automatically bound to the obj object. In this case, this.firstName would be 
undefined inside the callback, resulting in unexpected output.

To fix fn3 and make it work as intended, you can use the bind method to explicitly 
bind the this context:
fn3: function () {
    let arr = [1, 2, 3, 4];
    arr.forEach(function (i) {
        console.log(i + this.firstName);
    }.bind(this));
}
*/