let arr = [4, 3, 4, 3, 2, 4, 1, 5, 4, 4]; 

function findMaxFrequency(arr) { 
   let maxCount; 
   let res = {}; 
   for (num of arr) { 
      if (res[num]) { 
         res[num]++; 
      } else { 
         res[num] = 1; 
      } 
   } 
   return Math.max(...Object.values(res)); 
} 

console.log(findMaxFrequency(arr))

***********************************†***********