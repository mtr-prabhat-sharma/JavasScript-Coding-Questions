/* Javascript function to print pattern 
    *****
    ****
    ***
    **
    *

*/

function pattern(n) {
    let str = "";
    for(let i=n;i>0;i--){
        for(let j=0;j<i;j++) {
            str += '*';
        }
    str += "\n";
    }
    return str;
}
console.log(pattern(5));
