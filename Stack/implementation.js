class Stack {
    constructor() {
      this.dataStore = [];
      this.top = 0;
    }
  
    push(element) {
      this.dataStore[this.top++] = element;
    }
  
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.dataStore[--this.top];
    }
  
    clear() {
      this.top = 0;
      this.dataStore = [];
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.dataStore[this.top - 1];
    }
  
    size() {
      return this.top;
    }
  
    isEmpty() {
      return this.top === 0;
    }
  
    printStack() {
      for (let i = 0; i < this.top; i++) {
        console.log(`${i}th position of stack - ${this.dataStore[i]}`);
      }
    }
  }
  
  // Example : 
  let stack = new Stack();
  
  // Testing push method
  stack.push(7);
  stack.push(9);
  stack.push(5);
  console.log("After pushes:");
  stack.printStack();  // Should print 7, 9, 5
  
  // Testing peek method
  console.log("Peek:", stack.peek());  // Should print 5
  
  // Testing pop method
  console.log("Popped:", stack.pop());  // Should print 5
  console.log("Popped:", stack.pop());  // Should print 9
  console.log("After pops:");
  stack.printStack();  // Should print 7
  
  // Testing isEmpty method
  console.log("Is stack empty?", stack.isEmpty());  // Should print false
  
  // Testing size method
  console.log("Stack size:", stack.size());  // Should print 1
  
  // Testing clear method
  stack.clear();
  console.log("After clear:");
  stack.printStack();  // Should print nothing
  
  // Testing isEmpty method after clear
  console.log("Is stack empty?", stack.isEmpty());  // Should print true
  console.log("Stack size:", stack.size());  // Should print 0
  