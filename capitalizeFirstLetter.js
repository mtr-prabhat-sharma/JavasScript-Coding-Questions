/* JavaScript function to capilatize the first letter of each word in a string*/
function capitalizeFirstLetter(s) {
    const words = s.split(' ');
    const cw = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
     })
    let res = cw.join(' ');
    return res;
}
console.log(capitalizeFirstLetter("my name is jhony deep"))