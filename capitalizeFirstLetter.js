/* JavaScript function to capilatize the first letter of each word in a string*/

function capitalizeFirstLetter(s) {
    const words = s.split(' '); // Split the string into array of words
    /*It will iterate through all the words inside array and capitilalize the 
    character at 0 index and then concat it with the rest of the word by remoivng 
    the first letter which is smaller*/
    const cw = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1); 
     })
    let res = cw.join(' ');
    return res;
}
console.log(capitalizeFirstLetter("my name is jhony deep"))