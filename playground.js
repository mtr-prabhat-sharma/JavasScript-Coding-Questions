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

// function isBalanced(str) {
//     let arr = [];
//     let obj = {
//         '(':')',
//         '{': '}',
//         '[':']',
//     };
//     for(let char of str) {
//        if(obj[char]) {
//         arr.push(char);
//        } else {
//        // var char = arr.pop();
//         if (arr.length === 0 || obj[arr.pop()] !== char) {
//             return false; 
//           }
//        }
//     }
//     return arr.length === 0;

// }

// console.log(isBalanced("{}[()]"));



// function fibpnacci() {
//     let n = 0;
//     let n1 = 1;
//     console.log(n);
//     return fibpnacci(n1+n);
// }
// fibpnacci()

function peak(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > arr[i-1]&& arr[i] > arr[i+1]){
            res.push(arr[i])
            
        }
    }
    return res;
}
console.log(peak([10,12,15,11,9,22,14]))