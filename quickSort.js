/*
 QuickSort is a widely used sorting algorithm that efficiently sorts an 
 array or list by partitioning it into smaller subarrays. 
 It was developed by Tony Hoare in 1960. 
 QuickSort is known for its average-case time complexity of O(n log n) 
 and its space efficiency.

 ALGO:
 1. If the array has 0 or 1 elements, return the array (base case).
 2. Select a pivot element (usually the middle element).
 3. Partition the array into two sub-arrays:
    - Elements less than the pivot (left sub-array).
    - Elements greater than the pivot (right sub-array).
 4. Recursively apply quickSort on the left and right sub-arrays.
 5. Combine the sorted left sub-array, pivot element, and sorted right sub-array.
 6. Return the combined array as the result.
 
 */


function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    for(let i = 0;i<arr.length;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot){
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([2,5,1,3,4]))