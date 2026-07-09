class LinkedList {
  constructor(...arr) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    for (let val of arr) {
      this.append(val);
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    if (!this.head) this.tail = newNode;
    this.head = newNode;
    this.size++;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  at(index) {
    if (index >= this.size || index < 0) return;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  toString() {
    let str = "";
    let current = this.head;
    while (current) {
      str += current.value;
      if (current.next) str += " -> ";
      current = current.next;
    }
    return str;
  }
}

class Node {
  value = null;
  next = null;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

let list = new LinkedList();
list.append(1)

console.log(list.toString());
console.log(list.at(0));

list.prepend(6);
console.log(list.toString());
