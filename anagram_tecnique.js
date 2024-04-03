// Input= ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output= [ ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function anagram(strArr) {
    let res = {};
    for(let i=0;i<strArr.length;i++) {
        let newStr = strArr[i].split('').sort().join('');
        if(res[newStr]) {
            res[newStr].push(strArr[i]);
        } else {
            res[newStr] = [strArr[i]];
        }
    }
    console.log(res); //{ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
    console.log(Object.values(res)); //[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
}
anagram(input)