export class LinkedList {
    constructor(...arr) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        for (let val of arr) {
            this.append(val);
        }
    }

    size() {
        return this.size;
    }

    getHead() {
        return this.head.value;
    }

    getTail() {
        return this.tail.value;
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

    pop() {
        if (!this.head) return;
        let newHead = this.head.next;
        let value = this.head.value;
        this.head = null;
        this.head = newHead;
        return value;
    }

    at(index) {
        if (index >= this.size || index < 0) return;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }

    findIndex(value) {
        for (let current = this.head, index = 0; current; current = current.next, index++) {
            if (current.value === value) return index;
        }
        return -1;
    }

    contains(value) {
        for (let current = this.head; current; current = current.next) {
            if (current.value === value) return true;
        }
        return false;
    }

    insertAt(index, [...values]) {
        if(index < 0 || index > this.size) throw new RangeError(`Error, index ${index} out of bounds`)
        if (index == 0) {
            for (let i = values.length-1; i >= 0; i--) {
                let newNode = new Node(values[i], this.head);
                this.head = newNode;

            }
            return;
        }
        for (let current = this.head, i = 0; current; current = current.next, i++) {
            if (i === index -1) {
                for (let val of values) {
                    let newNode = new Node(val, current.next);
                    current.next= newNode
                    current = current.next;
                }
            }
        }
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
