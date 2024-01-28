//Ways in which we can create Objects in Java Script

//1 Using Object Literals
let obj = {
    name:'Jhon',
    age:23,
    address: {
        city:'NJ',
        PIN:11442
    }
};

//console.log(obj); //{ name: 'Jhon', age: 23, address: { city: 'NJ', PIN: 11442 } }

//2 Using Constructor Functions 
function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

let person = new Person('Jhon', 32, {
    city:'NJ',
    PIN: 114477
});
//console.log(person) //Person { name: 'Jhon', age: 32, address: { city: 'NJ', PIN: 114477 } }

//3 Using ES6 Classes
class NewPerson {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
let newPerson = new NewPerson('Jhon', 32, {
    city:'NJ',
    PIN: 114477
});

// console.log(newPerson); 
//NewPerson {
//     name: 'Jhon',
//     age: 32,
//     address: { city: 'NJ', PIN: 114477 }
//   }