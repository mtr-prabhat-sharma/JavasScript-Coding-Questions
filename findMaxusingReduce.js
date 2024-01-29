function findMax(arr) {
    const res = arr.reduce((prev, currVal) => {
        return prev > currVal ? prev : currVal;
    })
    console.log(res);
}

findMax([22,331,10,11,96,43,16]);