// Input= ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output= [ ["ate", "eat","tea"], ["nat","tan"], ["bat"] ]

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function anagram(strArr) {
    let res = {};
    for(let i=0;i<strArr.length;i++) {
        let newStr = strArr[i].split('').sort().join('');
        if(res[newStr]) {
            res[newStr].push(newStr);
        } else {
            res[newStr] = [newStr];
        }
    }
    console.log(res); //{ aet: [ 'aet', 'aet', 'aet' ], ant: [ 'ant', 'ant' ], abt: [ 'abt' ] }
    console.log(Object.values(res)); //[ [ 'aet', 'aet', 'aet' ], [ 'ant', 'ant' ], [ 'abt' ] ]
}
anagram(input)