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

  deleteHead() {
    if (!this.head) {
      return
    }

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
  }

  // deleteTail

  // traverse

  // search
}

const doublyLinkedList = new DoublyLinkedList()

function testDeleteHead() {
  doublyLinkedList.prepend("Ollie")
  console.log(`Pre head deletion: ${JSON.stringify(doublyLinkedList)}`)
  doublyLinkedList.deleteHead()
  console.log(`Post head deletion: ${JSON.stringify(doublyLinkedList)}`)
}
// testDeleteHead()
