function demo(arr, s) {
    let res = [];
    let count = 0;
    for(let i=0;i<arr.length;i++) {
        for(j = i+1;j<arr.length;j++){
            if(arr[i]+arr[j] === s){
                res.push([arr[i],arr[j]]);
                count++;
            }
        }
    }
    console.log(res); //[ [ 3, 4 ], [ 2, 5 ] ]
    console.log(count); //2
}
demo([3,2,5,4], 7) 
