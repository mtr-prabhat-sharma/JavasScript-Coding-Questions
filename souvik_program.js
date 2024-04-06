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

// ************************************************************************ //

//OTHER SOLUTION
/**
  Algo

     Initialize three pointers:

    i to point to the last non-zero element in nums1.
    j to point to the last element in nums2.
    k to point to the last index of the merged array.
    Iterate over nums1 and nums2 from the end:

    Compare the elements at nums1[i] and nums2[j].
    Place the larger element at nums1[k].
    Decrement k and the pointer corresponding to the larger element.
    Repeat until either nums1 or nums2 is fully processed.

    If there are remaining elements in nums2:
    Place them in the remaining slots of nums1

*/
const nums1 = [1, 2, 3, 0, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6, 7];
const n = 4;

let i = m - 1; // Index for nums1
let j = n - 1; // Index for nums2
let k = m + n - 1; // Index for merged array

while( i >= 0 && j >= 0) {
    if(nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
    }
    else {
        nums1[k] = nums2[j];
        j--;
    }
    k--;
}
while( j >= 0 ) {
    nums1[k] = nums2[j];
    k--;
    j--;
}
console.log(nums1);