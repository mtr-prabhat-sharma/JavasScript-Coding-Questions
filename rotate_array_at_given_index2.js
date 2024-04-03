/**
 Follow the steps below to solve the given problem. 

Initialize a temporary array(temp[n]) of length same as the original array
Initialize an integer(k) to keep a track of the current index
Store the elements from the position d to n-1 in the temporary array
Now, store 0 to d-1 elements of the original array in the temporary array
Lastly, copy back the temporary array to the original array
 */



let a1 = [1,2,3,4,5,6,7]; 
let d = 2;
function rotateArray(a1,d) {
    let temp = [];
    let k = d;
    let i=0;
    while(k<a1.length) {
        temp.push(a1[k]);
        k++;
    }
    while(i < d) {
        temp.push(a1[i]);
        i++;
    }
    a1 = temp;
    console.log(a1) // [3,4,5,6,7,1,2]
}
rotateArray(a1,d);
