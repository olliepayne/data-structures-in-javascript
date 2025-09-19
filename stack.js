class Stack {
  constructor() {
    this.items = []
  }

  pop() {
    this.items.pop()
  }

  push(item) {
    this.items.push(item)
  }

  peek() {
    return this.items[this.items.length - 1]
  }
}

const stack = new Stack()
stack.push(45)
stack.push(34)
// console.log(stack.peek())
stack.pop()
console.log(stack.peek())