export class BinarySearchTree {
    constructor(arr = []) {
        const sorted = [...new Set(arr.toSorted((a, b) => a - b))];
        this.root = this._buildTree(sorted, 0, sorted.length - 1);
    }

    _buildTree(arr, start, end) {
        if (start > end) return null;
        const middle = start + Math.floor((end - start) / 2);

        const root = new Node(arr[middle]);
        root.left = this._buildTree(arr, start, middle - 1);
        root.right = this._buildTree(arr, middle + 1, end);

        return root;
    }

    includes(value, root = this.root) {
        if (root === null) return false;

        if (value === root.data) return true;

        if (value < root.data) {
            return this.includes(value, root.left);
        }

        return this.includes(value, root.right);
    }

    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(root, key) {
        if (root === null) return new Node(key);

        if (key < root.data) {
            root.left = this._insert(root.left, key);
        } else if (key > root.data) {
            root.right = this._insert(root.right, key);
        }
        return root;
    }

    deleteItem(value) {
        this.root = this._deleteItem(this.root, value);
    }

    _deleteItem(root, key) {
        if (root === null) return null;

        if (key < root.data) root.left = this._deleteItem(root.left, key);
        else if (key > root.data) root.right = this._deleteItem(root.right, key);
        else {
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            const successor = this._getSuccesor(root);
            root.data = successor.data;
            root.right = this._deleteItem(root.right, successor.data);
        }
        return root;
    }

    _getSuccesor(current) {
        current = current.right;
        while (current !== null && current.left !== null) current = current.left;
        return current;
    }

    levelOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        if (this.root === null) return;

        const queue = [this.root];

        while (queue.length > 0) {
            const node = queue.shift();

            callback(node.data);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null || node === undefined) return;
        this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
}

class Node {
    data = null;
    left = null;
    right = null;

    constructor(value) {
        this.data = value;
    }
}
