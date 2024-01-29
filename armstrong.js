function armstrong(num) {
    let temp = num;
    let l = num.toString().length;
    var sum = 0;
    while(temp > 0) {
        var digit = temp % 10;
        sum = sum + digit**l;
        temp = parseInt(temp/10);
    }
    if(sum === num) {
        console.log('Num is armstrong');
    } else {
        console.log('Num is not armstrong')
    }
}
armstrong(370)

//other armstrong numbers: 0,1,153,370,371