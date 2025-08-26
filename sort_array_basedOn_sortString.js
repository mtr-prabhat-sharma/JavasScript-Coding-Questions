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
console.log(sortArray(arr, sortString)) //[ 'Mehak', 'Ashish', 'Payal', 'Shivam' ]

// Using sort function
function demo(arr, sortString) {
    let res = arr.sort((a,b) => {
        return sortString.indexOf(a[0]) - sortString.indexOf(b[0])
    })
    return res;
}
const arr = ['Ashish', 'Shivam','Payal','Mehak'];
const sortString = 'MAPS';
console.log(demo(arr, sortString)) // [ 'Mehak', 'Ashish', 'Payal', 'Shivam' ]
