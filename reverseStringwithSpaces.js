function reverseStringwithSpaces(str) {
    let characters = str.split("");
    let reverseString = [];
    let spaceArr = [];
    for(let i = 0;i<characters.length;i++) {
        if(characters[i] === ' ') {
            spaceArr.push(i);
        }
    }
    for(let i = characters.length-1;i>=0;i--){
        if(spaceArr[i] === i){
            reverseString.push(' ');
        }
        else {
            reverseString.push(characters[i]);
        }
        //console.log(characters[i])
    }
    let reverseStr = reverseString.join(' ');
    return reverseStr;
}
console.log(reverseStringwithSpaces("my name is prabhat"))
//output: tahbarp si eman ym