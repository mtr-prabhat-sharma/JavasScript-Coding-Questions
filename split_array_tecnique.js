/**
 Write a Code for the below requirement Sample Inputs & Outputs
Input :
List1 = [1,2,3,4,5,6,7,8,9,10] and Split_Value = 3
Expected Output is (Split Like this)
[[1,2,3],[4,5,6],[7,8,9],[10]]

Input :
List1 = [1,2,3,4,5,6,7,8,9,10] and Split_Value = 5
Expected Output is (Split Like this)
[[1,2,3,4,5],[6,7,8,9,10]]
 */
let arr = [1,2,3,4,5,6,7,8,9,10];
let split_value = 7;
function splitArray(arr,n) {
    let res = [];
    for(let i=0;i<arr.length;i +=n ) {
        res.push(arr.slice(i,i+n));
    }
    console.log(res);
}

splitArray(arr,split_value)