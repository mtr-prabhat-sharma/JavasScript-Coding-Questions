/**
 * STEP 1: First find the largest value in the array using reduce or Math.max().
 * STEP 2: Find the index of the largest value.
 * STEP 3: Delete thef largest value using splice().
 * STEP 4: Repeat the STEP 1. 
 */

function secondLargest(arr) {
    const largestVal = Math.max(...arr);
    const index = arr.indexOf(largestVal);
    const r = arr.splice(index,1); 
    const secondLargestVal = Math.max(...arr);
    console.log("Second Largest Value:", secondLargestVal);
}
secondLargest([4,7,2,8,10,6]);