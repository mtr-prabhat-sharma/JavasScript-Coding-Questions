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

/*************************************************************************************/
let str = "my name is kavita singh";
let newStr = str.split(" ");
let res = "";
for(let i=0;i<newStr.length;i++){
    if(newStr[i]!== " "){
        res = res + newStr[i].split('').reverse().join('')+" ";
    }else {
        res = res+" ";
    }
    
}
console.log(res); //ym eman si ativak hgnis 
/*************************************************************************************/