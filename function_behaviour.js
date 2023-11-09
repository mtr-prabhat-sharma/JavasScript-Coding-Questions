function xyz(){
    console.log("first"); 
    abc();
    console.log("third"); 
}

function abc(){
    console.log('second');
}

xyz();

/**
 * Output: 
   first
   second
   third

   Here's the breakdown of the execution:

    xyz is called.
    "first" is logged.
    abc is called from within xyz.
    Inside abc, "second" is logged.
    Control returns to xyz, and "third" is logged.
 */