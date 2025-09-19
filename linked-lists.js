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
    
  }

  insertMiddle() {
    
  }


  delete() {
    // delete specified node based
    // set the previous nodes pointer to the node to the right of where the deleted node was, or if it was the final node then set the pointer to null
    // only have the key, first search for the node and then delete it
  }

  search() {
    
  }

  // bonus: sort
}
