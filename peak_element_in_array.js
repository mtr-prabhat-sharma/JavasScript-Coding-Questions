function peak(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++) {
        if(arr[i] > arr[i-1]&& arr[i] > arr[i+1]){
            res.push(arr[i])
            
        }
    }
    return res;
}
console.log(peak([10,12,15,11,9,22,14])) //Output: [15,22]