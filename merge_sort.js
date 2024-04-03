function merge(arr1, arr2){
    let i = 0;
    let j = 0;
    let results = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
function mergeSort(arr) {
    let l = arr.length;
    if(l <= 1) return arr;

    const middle = Math.floor(l/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}
console.log(mergeSort([10,3,5,6,2,4,1,8,7,9]));

