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
