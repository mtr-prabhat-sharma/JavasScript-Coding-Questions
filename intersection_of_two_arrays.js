/* Method 1 */

function intersection1(arr1, arr2) {
    let res = [];
    for(let i=0;i<arr1.length;i++) {
        for(let j=0;j<arr2.length;j++) {
            if(arr1[i] === arr2[j] ) {
                res.push(arr1[i]);
            }
        }
    }
    console.log("Method 1",res);
}

intersection1([4,3,6,9,2,7], [8,2,1,7,9,11,12,4])

/* Method 2 */

function intersection2(arr1, arr2) {
    let res = [];
    for(let i=0;i<arr1.length;i++) {
        if(arr2.includes(arr1[i])) {
            res.push(arr1[i]);
        }
    }
    console.log("Method 2",res);
}

intersection2([4,3,6,9,2,7], [8,2,1,7,9,11,12,4]);


// /* Method 3 */

// function intersection2(arr1, arr2) {
//     let res = [];
//     for(let i=0;i<arr1.length;i++) {
//         if()
//     }
//     console.log("Method 3",res);
// }

// intersection2([4,3,6,9,2,7], [8,2,1,7,9,11,12,4]);
