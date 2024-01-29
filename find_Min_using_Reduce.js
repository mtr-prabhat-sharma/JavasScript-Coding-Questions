function findMin(arr) {
    const res = arr.reduce((prev, currVal) => {
        return prev < currVal ? prev : currVal;
    })
    console.log(res);
}

findMin([22,331,10,11,96,43,16]);