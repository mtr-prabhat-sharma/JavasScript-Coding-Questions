function flattenArray(arr) {
    let resArr = [];
    for(let i=0; i< arr.length; i++) {
        if(Array.isArray(arr[i])) {
            resArr = resArr.concat(flattenArray(arr[i]));
        } else {
            resArr.push(arr[i]);
        }
    }
    return resArr;
}
console.log(flattenArray([1,2,[3,[4,[5,6]]]]))