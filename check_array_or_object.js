function checkArray(ele) {
    const res = Array.isArray(ele); //returns true if array otherwise returns false
    if(res) {
        console.log(`${ele} is an array`);
    } else {
        console.log(`${ele} is an object`);
    }
}
checkArray([2,3]); // Is an array 
checkArray({id:1,name:'demo'})