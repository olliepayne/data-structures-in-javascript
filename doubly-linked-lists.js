class Node {
  constructor(prev, data, next) {
    this.prev = prev
    this.data = data
    this.next = next
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new Node(null, value, this.head)
    this.head = newNode
    this.tail = !this.tail && newNode
  }

  append(value) {
    const newNode = new Node(this.tail, value, null)
    this.head = !this.head && newNode
    this.tail = newNode
  }

  // deleteHead

  // deleteTail

  // traverse

  // search
}

const doublyLinkedList = new DoublyLinkedList()
// doublyLinkedList.prepend("Ollie")
doublyLinkedList.append("Ollie")
console.log(doublyLinkedList)
