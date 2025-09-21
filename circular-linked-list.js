class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    if (!value) {
      return
    }

    const newNode = new Node(value, null)

    if (this.head) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.tail = newNode
      this.head = newNode
      this.tail.next = this.head
    }
  }

  // append

  // delete head

  // delete tail

  // traverse

  // search
}

function runTest(name) {
  const circularLinkedList = new CircularLinkedList()

  switch (name) {
    case "prepend":
      circularLinkedList.prepend("hello")
      circularLinkedList.prepend("world")
      console.log(circularLinkedList)
      break
  }
}
runTest("prepend")
