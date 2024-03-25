/**
Input: arr[]   = {3, 0, 2, 0, 4}
Output: 7
Explanation: Structure is like below.
We can trap “3 units” of water between 3 and 2,
“1 unit” on top of bar 2 and “3 units” between 2 and 4.

Refer: https://media.geeksforgeeks.org/wp-content/uploads/20200429012307/Untitled-Diagram811.png

Follow the steps mentioned below to implement the idea:

Traverse the array from start to end:
For every element: 
Traverse the array from start to that index and find the maximum height (a) and 
Traverse the array from the current index to the end, and find the maximum height (b).
The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
Print the total amount of water stored.
 */

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
function trappingRainWater(arr) {
    let res = 0;
    for(let i=0;i<arr.length;i++) {
        let left = arr[i];
        for(let j=0;j<i;j++) {
            left = Math.max(left,arr[j]);
        }
        
        let right = arr[i];
        for(let j=i+1;j<arr.length;j++) {
            right = Math.max(right, arr[j]);
        }
        res = res + Math.min(left,right) - arr[i];
    }
        console.log(res);
}
trappingRainWater(arr);//6