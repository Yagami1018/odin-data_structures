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
        for(let current = this.head, index = 0; current !== null; current = current.next, index++) {
            if(current.value === value) return index;
        }
        return -1;
    }

    contains(value) {
        for (
            let current = this.head;
            current !== null;
            current = current.next
        ) {
            if (current.value === value) return true;
        }
        return false;
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
