function demo(str) {
    let reverseStr = '';
    let currentWord = '';
    for(let i=0;i<str.length;i++) {
        if(str[i] !== ' ') {
            currentWord = str[i] + currentWord;
            
        } else {
            reverseStr = reverseStr + currentWord + ' ';
            currentWord = '';
        }
        
    }
    reverseStr =  reverseStr + currentWord;
    console.log(reverseStr)
}
demo('my name is prabhat sharma'); //ym eman si tahbarp amrahs