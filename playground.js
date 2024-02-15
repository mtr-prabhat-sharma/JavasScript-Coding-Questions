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

// function peak(arr) {
//     let res = [];
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] > arr[i-1]&& arr[i] > arr[i+1]){
//             res.push(arr[i])
            
//         }
//     }
//     return res;
// }
// console.log(peak([10,12,15,11,9,22,14]))
// function merge(arr1, arr2){
//     let i = 0;
//     let j = 0;
//     let results = [];

//     while(i < arr1.length && j < arr2.length) {
//         if(arr2[j] > arr1[i]) {
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i < arr1.length){
//         results.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length) {
//         results.push(arr2[j]);
//         j++;
//     }

//     return results;
// }
// function mergeSort(arr) {
//     let l = arr.length;
//     if(l <= 1) return arr;

//     const middle = Math.floor(l/2);
//     let left = mergeSort(arr.slice(0,middle));
//     let right = mergeSort(arr.slice(middle));
//     return merge(left, right);
// }
// console.log(mergeSort([4,3,7,5,2,1,8,6]));


let obj = {
    firstName: "abc",
    lastName: "xyz",
    fn: function () {
        console.log(this);
    },
    fn1: () => {
        console.log(this);
    },

    fn2: function () {
        let arr = [1, 2, 3, 4];
        arr.forEach((i) => {
            console.log(i + this.firstName);
        });
    },
    fn3: function () {
        let arr = [1, 2, 3, 4];
        arr.forEach(function (i) {
            console.log(i + this.firstName);
        });
    }
}