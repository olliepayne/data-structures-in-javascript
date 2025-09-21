class Node {
  constructor(data, next, prev) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    // set the head to be a new node with the argument value
    const newNode = new Node(value, this.head, null)
    this.head = newNode
    this.tail = !this.tail && newNode
  }

  // append

  // deleteHead

  // deleteTail

  // traverse

  // search
}
