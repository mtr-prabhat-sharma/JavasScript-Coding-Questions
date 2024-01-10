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
countOccurenceofCharacters('prabhat sharma');