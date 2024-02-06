function pairSum(arr, s) {
    let res = [];
    for(let i=0;i<arr.length;i++) {
        for(let j=i;j<arr.length;j++) {
            if(arr[i] + arr[j] === s) {
                res.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(res)
}

pairSum([4,3,7,1,6,2,9], 10); //Output: [ [ 4, 6 ], [ 3, 7 ], [ 1, 9 ] ]