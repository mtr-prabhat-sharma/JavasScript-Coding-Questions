function lengthOfLongestSubstring(str) {
    let longest = 0;
    let longestStr = "";
    let seen = {};
    let start = 0;
    let next = 0;
  
    while (next < str.length) { 
      let char = str[next];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      if (longest < next - start + 1) {
        longest = next - start + 1;
        longestStr = str.slice(start, next + 1);
      }
      // Update current characters index
      seen[char] = next + 1;
      next++;
    }
    console.log('longest', longest);
    console.log(longestStr);
  }
  
  lengthOfLongestSubstring("abcaad"); //Output: abc


/**
longest = 0;
next = 0;
start = 0;
str.length = 6
while -> 0 < 6 -> true
    char = str[next] = str[0] = a;
    1st if -> seen[a] -> false
    2nd if -> longest < next - start + 1 = 0 < 0-0+1 = 0 < 1 -> true
        longest = next - start + 1 = 0-0+1 = 1;
        longestStr = str.slice(start, next + 1) = str.slice(0, 1) = ab;
    seen[char] = next + 1 = 1;
    next ++ -> next = 1;

while -> 1 < 6 -> true
    char = str[next] = str[1] = b;
    1st if -> seen[b] -> false;
    2nd if -> 1 < 1 - 0 + 1 = 1 < 2 -> true
        longest = 1 - 0 + 1 = 2;
        longestStr = str.slice(0, 2) = abc;
    seen[char] = next + 1 = 1 + 1 = 2;
    next++ -> next = 2;
    
while -> 2 < 6 -> true;
    char = str[next] = str[2] = c;
    1st if -> seen[c] -> false;
    2nd if -> 2 < 2 - 0 + 1 = 2 < 3 -> true
        longest = 2 - 0 + 1 = 1;
        longestStr = str.slice(0, )

*/