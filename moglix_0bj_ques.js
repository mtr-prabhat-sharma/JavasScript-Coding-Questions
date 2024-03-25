let students = [  { name: 'basant', age: 25 }, 
{ name: 'ram', age: 26 }, 
{ name: 'shyam', age: 25}, 
{ name: 'sita', age: 35}, 
{ name: 'gita', age: 25 } 
];

function demo(student) {
    let newObj = {};
    for(let i=0;i<student.length;i++) {
        const {age, ...stu} = student[i];
        if(newObj[age]) {
        newObj[age].push(stu);
            
        }else {
            newObj[age] = [stu];
        }
    }
    console.log(newObj)
}
demo(students); 
/**
{
  '25': [ { name: 'basant' }, { name: 'shyam' }, { name: 'gita' } ],
  '26': [ { name: 'ram' } ],
  '35': [ { name: 'sita' } ]
}
 */