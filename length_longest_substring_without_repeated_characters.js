function longestUniqueSubsttr(str) 
{ 
	let start = 0;
	let end = 0;
	let maxLength = 0;
	let unique = new Set();
	while(end < str.length) {
	    if(!unique.has(str[end])) {
	        unique.add(str[end]);
	        end ++;
	        maxLength = Math.max(maxLength, unique.size);
	    } else {
	        unique.delete(str[start]);
	        start ++;
	    }
	}
	return [...unique];
} 
console.log(longestUniqueSubsttr("pwwkew")) //Output: 3
