function reverseNumber(num) {
   let rev = '';
   while(num > 0) {
       let last = num % 10;
       rev = rev + last;
       num = Math.floor(num/10)
   }
   return rev;
   
}
console.log(reverseNumber(2456))

******************************************************************
// Without using loop (using recursion)
   
function reverseNumber(num) {
   let rev = '';
   if(num % 10 === num) {
       return num;
   }
   rev = (num % 10).toString() + reverseNumber(Math.floor(num / 10));
   return rev;
   
}
console.log(reverseNumber(2465))
