function longestWordInSentence(sentence) {
    let newSent = sentence.split(" ");
    let longestWord = newSent[0];
    for(let i=0;i<newSent.length;i++) {
        if(longestWord.length < newSent[i].length) {
            longestWord = newSent[i];
        }
    }
    return longestWord;
}
console.log(longestWordInSentence('I love coding javascript'));