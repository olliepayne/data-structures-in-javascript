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
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.tail = this.head
      this.head = newNode
    }
  }

  append(value) {
    const newNode = new Node(this.tail, value, null)

    if (this.tail) {
      this.tail.next = newNode
    }

    this.tail = newNode
    this.head = this.head ? this.head : newNode
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

  deleteTail() {
    if (!this.tail) {
      return
    }

    if (this.tail.prev) {
      this.tail = this.tail.prev
    } else {
      this.tail = null
      this.head = null
    }
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
  doublyLinkedList.prepend("Ollie")
  console.log(`Pre head deletion: ${JSON.stringify(doublyLinkedList)}`)
  doublyLinkedList.deleteHead()
  console.log(`Post head deletion: ${JSON.stringify(doublyLinkedList)}`)
}

function testDeleteTail() {
  doublyLinkedList.prepend("Ollie")
  doublyLinkedList.append("Payne")
  console.log(`Pre head deletion: ${JSON.stringify(doublyLinkedList)}`)
  doublyLinkedList.deleteTail()
  console.log(`Post head deletion: ${JSON.stringify(doublyLinkedList)}`)
}

testPrepend()
// testAppend()
// testDeleteHead()
// testDeleteTail()
