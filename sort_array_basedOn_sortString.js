// Without using default functions
function sortArray(arr, sortString) {
    let res = [];
    for(let i=0; i<sortString.length; i++) {
        for(let j=0;j<arr.length;j++) {
            if(arr[j].charAt(0) === sortString[i]) {
                res.push(arr[j])
            }
        }
    }
    return res;
}
const arr = ['Ashish', 'Shivam','Payal','Mehak'];
const sortString = 'MAPS';
console.log(sortArray(arr, sortString))
