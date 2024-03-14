/**
const nums1 = [1, 2, 3, 0, 0, 0,0];
const m = 3;
const nums2 = [2, 5, 6,7];
const n = 4;

Output:[1, 2, 2, 3, 5, 6, 7]
 */

function demo(arr1, m, arr2, n) {
    let indexArr = [];
    for(let i=0;i<arr1.length;i++) {
        if(arr1[i] === 0) {
            indexArr.push(i);
        }
    }
    for(let i=0;i<indexArr.length;i++) {
        let newI = indexArr[i];
        arr1[newI] = arr2[i];
    }
    console.log(arr1.sort())
}
demo(nums1, m, nums2, n)