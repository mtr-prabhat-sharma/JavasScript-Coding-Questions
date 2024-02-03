function chunkArray(arr, n) {
    let res = [];
    let index = 0;
    while(index < arr.length) {
        let newArr = arr.slice(index, index+n);
        res.push(newArr);
        index = index + n;
    }
    console.log(res);
 }
 chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
 //Output
 //[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9 ] ]