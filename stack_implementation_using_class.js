/**
 * Below is the example of implementation of statck in javascript using classes
 */

class Stack {
    constructor() {
        this.items = [];
    }

    /* Function to push the elements into top of the stack, here we can take any
    function name instead of taking push*/
    push(element) {
        this.items.push(element);
    }

    /* function to remove element from the stack */
    pop() {
        if(this.isEmpty()) {
            return 'No elements inside Stack'
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
    /* Function to print the elements of the stack*/
    print() {
        console.log(this.items);
    }
}

const stack = new Stack;
stack.push(121);
stack.print();