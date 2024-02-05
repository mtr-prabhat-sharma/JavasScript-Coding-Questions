//This function will return the index of the array whoes value sum is equals to the target

function sumEqualsToTarget(arr, target) {
    for(let i=0;i<arr.length;i++) {
        for(let j=i;j<arr.length;j++) {
            if(arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
console.log(sumEqualsToTarget([2,3,4,1,7,5], 10));