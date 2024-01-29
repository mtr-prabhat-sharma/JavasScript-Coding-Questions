//Functions to remove duplicates from the array: 3 methods

var arr = [2,3,4,4,5,2,8,7,5,6,7,1,1,8];

/* ..................... METHOD 1 ........................... */
function removeDuplicateM1(arr) {
    let newArr = [...new Set(arr)];
    console.log(newArr);
}
removeDuplicateM1(arr);

/* ..................... METHOD 2 ........................... */
function removeDuplicateM2(arr) {
    let uniqueArr = [];
    for(let i=0; i<arr.length; i++) {
        if(!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    console.log(uniqueArr);
}
removeDuplicateM2(arr);

/* ..................... METHOD 3 ........................... */
function removeDuplicateM3(arr) {
    let uniqueArr2 = [];
    for(let i=0; i<arr.length; i++) {
        if(uniqueArr2.indexOf(arr[i]) === -1) {
            uniqueArr2.push(arr[i]);
        }
    }
    console.log(uniqueArr2)
}
removeDuplicateM3(arr);