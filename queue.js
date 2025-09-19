class Queue {
  constructor(items) {
    this.items = items 
  }

  enqueue(item) {
    this.items.push(item)
  }

  size() {
    return this.items.length
  }

  peak() {
    return this.items[0]
  }
}