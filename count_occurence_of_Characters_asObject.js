function countOccurenceofCharacters(str) {
    var res = {};
    for(let i=0;i<str.length;i++){
        var char = str[i];
        if(res[char]){
            res[char]++;
        } else {
            res[char] = 1;
        }
    }
    console.log(res);
}
countOccurenceofCharacters('prabhat sharma'); //{ p: 1, r: 2, a: 4, b: 1, h: 2, t: 1, ' ': 1, s: 1, m: 1 }