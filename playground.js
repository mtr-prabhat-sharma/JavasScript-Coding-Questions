function demo() {
    var name = 'dasdas';
const obj = {
    name: 'prabhat',
    printName() {
        console.log(this.name);
    },
    printName1: () => {
        let name = 'rwewe';
        console.log(this.name);
    }

}

obj.printName();
obj.printName1();
}
demo();