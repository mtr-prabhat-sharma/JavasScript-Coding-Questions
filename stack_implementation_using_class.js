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

    /* Function to remove element from the stack */
    pop() {
        if(this.isEmpty()) {
            return 'No elements inside Stack'
        }
        return this.items.pop();
    }

    /* Function to Get the value of the top element without removing it */
    peek() {
        if(this.isEmpty()) {
            return 'No elements inside stack'
        }
        return this.items[this.items.length - 1];
    }

    /* Function to check stack is empty or not
        If stack is empty then return TRUE otherwise returns FALSE
    */
    isEmpty() {
        return this.items.length === 0;
    }

    /*Function to get the size of stack */
    size() {
        return this.items.length;
    }
    /* Function to print the elements of the stack*/
    print() {
        console.log(this.items);
    }
}

const stack = new Stack;
stack.push(121);
console.log(stack.peek());
console.log(stack.size())
stack.print();