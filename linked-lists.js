class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new Node(value, this.head)

    this.head = newNode
    this.tail = this.tail ? this.tail : newNode
  }

  append(value) {
    const newNode = new Node(value, null)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    this.tail.next = newNode
    this.tail = newNode
  }

  traverse() {
    let current = this.head

    while (current) {
      process.stdout.write(`${current.data}${current !== this.tail ? "-->" : ""}`)
      current = current.next
    }
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

    if (!this.head.next) {
      this.head = null
      this.tail = null
    }

    let current = this.head
    while (current.next.next) {
      current = current.next
    }
    current.next = null
    this.tail = current
  }

  // search(value) {
  //   let current = this.head

  //   while (current !== value) {
  //     if (current === value) {
  //       return current
  //     }

  //     current = current.next
  //   }

  //   return null
  // }

  // bonus: to array

  // bonus: sort
}

let linkedList = new LinkedList()
linkedList.append("hello")
linkedList.append("world")
linkedList.deleteTail()
linkedList.traverse()
