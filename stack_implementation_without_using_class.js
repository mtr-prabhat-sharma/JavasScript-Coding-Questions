// Create an empty stack
function createStack() {
  const stack = [];

  // Push element onto the stack
  function push(element) {
    stack.push(element);
  }

  // Pop element from the stack
  function pop() {
    if (isEmpty()) {
      return "Underflow";
    }
    return stack.pop();
  }

  // Peek at the top element without removing it
  function peek() {
    if (isEmpty()) {
      return "Stack is empty";
    }
    return stack[stack.length - 1];
  }

  // Check if the stack is empty
  function isEmpty() {
    return stack.length === 0;
  }

  // Get the size of the stack
  function size() {
    return stack.length;
  }

  // Print the stack elements
  function print() {
    console.log(stack);
  }

  // Return public methods
  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
    print,
  };
}

// Example usage
const stack = createStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack after pushing 10, 20, and 30:");
stack.print(); // Output: [10, 20, 30]

console.log("Popped element:", stack.pop()); // Output: 30

console.log("Peek at the top element:", stack.peek()); // Output: 20

console.log("Is the stack empty?", stack.isEmpty()); // Output: false

console.log("Size of the stack:", stack.size()); // Output: 2
