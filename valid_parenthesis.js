
function isBalanced(str) {
    let arr = [];
    let obj = {
        '(':')',
        '{': '}',
        '[':']',
    };
    for(let char of str) {
       if(obj[char]) {
        arr.push(char);
       } else {
        if (arr.length === 0 || obj[arr.pop()] !== char) {
            return false; 
          }
       }
    }
    return arr.length === 0;

}

console.log(isBalanced("{}[()]"));