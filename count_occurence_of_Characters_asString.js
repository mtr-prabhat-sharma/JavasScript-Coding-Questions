//This will count occurence of characters and prints result in string format
function countOccurenceofCharacters(s) {
    let str = s.split('').sort();
    let resStr = "";
    let count = 1;
    for(let i=0;i<str.length;i++) {
            if(str[i] === str[i+1]) {
                count ++;
                
            } else {
                resStr = resStr + str[i] + count;
                count = 1;
            }
    }
    console.log(resStr)
}
countOccurenceofCharacters('aabdcdcabdd'); //Output a3b2c2d4