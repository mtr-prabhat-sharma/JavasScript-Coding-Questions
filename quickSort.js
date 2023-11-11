/*
 QuickSort is a widely used sorting algorithm that efficiently sorts an array or 
 list by partitioning it into smaller subarrays. 
 It was developed by Tony Hoare in 1960. 
 QuickSort is known for its average-case time complexity of O(n log n) and 
 its space efficiency.
 
 */


function quickSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i = 1;i<arr.length;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([2,5,1,3,4]))