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

  insertMiddle() {
    
  }

  traverse() {
    let current = this.head

    while (current) {
      console.log(`${current.data}${current !== this.tail ? "-->" : ""}`)
      current = current.next
    }
  }


  delete() {
    // delete specified node based
    // set the previous nodes pointer to the node to the right of where the deleted node was, or if it was the final node then set the pointer to null
    // only have the key, first search for the node and then delete it


  }

  search(value) {
    // search the entire linked list starting from the head for the target value
    
  }

  // bonus: sort
}
