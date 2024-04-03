/**
 Algorithm: 

Create an array empty array res and a variable temp = 1.

Traverse the input array from start to end.

For every index i update res[i] as res[i] = temp and temp = temp * array[i], 
i.e store the product upto i-1 index from the start of array.

initialize temp = 1 and traverse the array from last index to start.

For every index i update res[i] as res[i] = res[i] * temp and temp = temp * array[i],
 i.e multiply with the product upto i+1 index from the end of array.

Print the res array.
 */



let arr = [10,3,5,6,2];
function demo(arr) {
    let temp = 1;
    let res = [];
    for(let i=0;i<arr.length;i++) {
        res[i] = temp;
        temp = temp * arr[i];
    }
    temp = 1;
    for( i = arr.length - 1;i>=0;i--) {
        res[i] = res[i] * temp ;
        temp = temp * arr[i];
    }
    console.log(res);
}
demo(arr);//[ 180, 600, 360, 300, 900 ]