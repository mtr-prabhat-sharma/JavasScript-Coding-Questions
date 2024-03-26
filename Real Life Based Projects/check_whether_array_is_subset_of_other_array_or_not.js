let a1 = [1,2,3,4,5,6,7,8];
let a2 = [4,5,6,44];

function demo(a1,a2) {
    let i = 0;
    let j = 0;
    while( i < a2.length) {
        if(a1.includes(a2[i])) {
            i++;
        }
        else {
            return "Not a subsset";
        }
        if( i === a2.length) {
            return "Subset";
        }
    }
}
console.log(demo(a1,a2));
