let a1 = [1,12,15,26,38];
let a2 = [2,13,17,30,35];
function medianFn(a1,a2) {
    let newArr = [...a1,...a2].sort((a,b) => a - b);
    let median = 0;
    if(newArr.length % 2 === 0) {
        let index = newArr.length / 2;
        median = (newArr[index - 1] + newArr[index]) / 2;
    }else {
        let index = Math.floor(newArr.length / 2);
        median = newArr[index];
    }
    console.log(median)
}
medianFn(a1,a2); // 16