function rotateArray(arr,k) {
    let newArr = arr.splice(0,k+1);
    let arr2 = [];
    for(let i=newArr.length-1;i>=0;i--) {
        arr2.push(newArr[i]);
    }
    let res = [...arr,...arr2];
    console.log(res);
}
rotateArray([1,2,3,4,5,6,7], 3); // Output: [5,6,7,4,3,2,1]