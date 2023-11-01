/*Bubble sort algorithm is an algorithm that sorts an array by comparing two 
adjacent elements and swapping them if they are not in the intended order. 
Here order can be anything like increasing or decreasing. */

function bubleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubleSort([1, 4, 5, 3, 2]));

/**
 * Worst Case and Average case time complexity 
If the array is in reverse order then this condition is the worst case and 
Its time complexity is O(n2).

Best case time complexity
If the array is already sorted then it is the best-case scenario and 
its time complexity is O(n)
 */