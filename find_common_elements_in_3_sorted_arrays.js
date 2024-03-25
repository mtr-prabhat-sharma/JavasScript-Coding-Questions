let ar1 = [1, 5, 10, 20, 40, 80];
let ar2 = [6, 7, 20, 80, 100];
let ar3 = [3, 4, 15, 20, 30, 70, 80, 120];

function demo(ar1, ar2, ar3) {
    let res = [];
    for (let i = 0; i < ar1.length; i++) {
        if (ar2.includes(ar1[i]) && ar3.includes(ar1[i])) {
            res.push(ar1[i]);

        }
    }
    console.log(res);

}
demo(ar1, ar2, ar3); //[20,80]