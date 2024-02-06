// function demo() {
//     var name = 'dasdas';
// const obj = {
//     name: 'prabhat',
//     printName() {
//         console.log(this.name);
//     },
//     printName1: () => {
//         let name = 'rwewe';
//         console.log(this.name);
//     }

// }

// obj.printName();
// obj.printName1();
// }
// demo();

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
       // var char = arr.pop();
        if (arr.length === 0 || obj[arr.pop()] !== char) {
            return false; 
          }
       }
    }
    return arr.length === 0;

}

console.log(isBalanced("{}[()]"));
