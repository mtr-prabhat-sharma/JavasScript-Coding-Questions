function findMissingValue(arr) {
    let missingArr = [];
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);
    for(let i=minVal;i<maxVal;i++) {
        if(arr.indexOf(i) < 0) {
            missingArr.push(i);
        }
    }
    console.log(missingArr)
}
findMissingValue([1,2,3,5,7,9,8,10])