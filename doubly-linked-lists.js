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
    const newNode = new Node(null, value, null)

    if (!this.head) {
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
    }

    this.head = newNode
  }

  append(value) {
    const newNode = new Node(null, value, null)

    if (!this.tail) {
      this.head = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
    }

    this.tail = newNode
  }

  deleteHead() {
    if (!this.head) {
      return
    }

    this.tail = this.head === this.tail ? null : this.tail
    this.head = this.head.next ? this.head.next : null
  }

  deleteTail() {
    if (!this.tail) {
      return
    }

    this.head = this.tail === this.head ? null : this.head
    this.tail = this.tail.prev ? this.tail.prev : null
  }

  // traverse

  // search
}

const doublyLinkedList = new DoublyLinkedList()

function testPrepend() {
  doublyLinkedList.prepend("Ollie")
  doublyLinkedList.prepend("Payne")
  console.log(doublyLinkedList)
}

function testAppend() {
  doublyLinkedList.append("Ollie")
  doublyLinkedList.append("Payne")
  console.log(doublyLinkedList)
}

function testDeleteHead() {
  doublyLinkedList.append("Ollie")
  doublyLinkedList.append("Payne")
  console.log(`Pre head deletion: ${JSON.stringify(doublyLinkedList)}`)
  doublyLinkedList.deleteHead()
  console.log(`Post head deletion: ${JSON.stringify(doublyLinkedList)}`)
}

function testDeleteTail() {
  doublyLinkedList.prepend("Ollie")
  doublyLinkedList.append("Payne")
  console.log("Pre head deletion:")
  console.log(doublyLinkedList)
  doublyLinkedList.deleteTail()
  console.log("Post head deletion:")
  console.log(doublyLinkedList)
}

// testPrepend()
// testAppend()
// testDeleteHead()
testDeleteTail()
