
function demo(str) {
    let newStr = str.split(' ');
    let revStr = "";
    for(let i=0;i<newStr.length;i++) {
        newStr[i] = newStr[i].split('').reverse().join('');
    }
    let res = newStr.join(' ');
    let res2 = res.charAt(0).toUpperCase() + res.slice(1);
    let s2 = res2.split(" ");
    let lChar = s2[0].slice(-1).toLowerCase();
    let word = s2[0].slice(0,-1) + lChar;
    let fRes = s2.splice(0,1,word);
    console.log(s2.join(' '))
}
demo("India is my country") // Aidni si ym yrtnuoc