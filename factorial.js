function factorial(num) {
    let fact = 1;
    if(num < 0) {
        return "negative numbers are not allowed !";
    } else {
        for(i=1; i<=num; i++) {
            fact = fact * i;
        }
    }
    console.log(fact)
}
factorial(5);