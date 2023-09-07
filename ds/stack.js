class Node {
  constructor(val, prev) {
    this.val = val;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data, this.head);
    this.head = newNode;
    this.length++;
  }

  pop() {
    this.head = this.head.prev;
    this.length--;
  }

  peek() {
    return this.head;
  }

  isEmpty() {
    return this.length === 0;
  }
  print() {
    return this.head.val;
  }
}

let newStack = new Stack();
newStack.push(10);
newStack.push(20);
newStack.pop();
newStack.push("Grande Marek Hamsik");
newStack.peek();
newStack.isEmpty();
console.log(newStack.print());
console.log(newStack);
