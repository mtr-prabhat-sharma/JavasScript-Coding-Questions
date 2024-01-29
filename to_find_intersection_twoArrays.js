//Function to find the intersection of two arrays meaning elements that are common 
// in both the arrays

function intersectionTwoArrays(arr1, arr2) {
    let intersectionArr = arr1.filter((ele) =>{
        return arr2.includes(ele)
    })
    console.log(intersectionArr)
}
intersectionTwoArrays([2,4,11,5,31],[1,2,3,14,5])