function findDuplicateCharacters(str) {
    let charCount = {};
    let duplicates = [];
    for(let char of str) {
        console.log(char)
        charCount[char] = charCount[char] !== undefined ? charCount[char] + 1 : 1;
    }
    for(let char in charCount){
        if(charCount[char] > 1) {
            duplicates.push(char);
        }
    }
    return duplicates;
}
console.log(findDuplicateCharacters('rab ha tsha ra'));