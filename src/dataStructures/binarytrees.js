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

    inOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        this._inOrder(this.root, callback);
    }

    _inOrder(node, callback) {
        if (node === null) return;

        this._inOrder(node.left, callback);
        callback(node.data);
        this._inOrder(node.right, callback);
    }

    preOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        this._preOrder(this.root, callback);
    }

    _preOrder(node, callback) {
        if (node === null) return;

        callback(node.data);
        this._preOrder(node.left, callback);
        this._preOrder(node.right, callback);
    }

    postOrderForEach(callback) {
        if (typeof callback !== "function") {
            throw new Error("A callback is required.");
        }

        this._postOrder(this.root, callback);
    }

    _postOrder(node, callback) {
        if (node === null) return;

        this._postOrder(node.left, callback);
        this._postOrder(node.right, callback);
        callback(node.data);
    }

    height(value) {
        const node = this._findNode(this.root, value);

        if (node === null) return undefined;

        return this._height(node);
    }

    _height(node) {
        if (node === null) return -1;

        return Math.max(this._height(node.left), this._height(node.right)) + 1;
    }

    depth(value) {
        let depth = 0;
        let current = this.root;

        while (current !== null) {
            if (value === current.data) {
                return depth;
            }

            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

            depth++;
        }

        return undefined;
    }

    _findNode(node, value) {
        if (node === null) return null;

        if (value === node.data) return node;

        if (value < node.data) {
            return this._findNode(node.left, value);
        }

        return this._findNode(node.right, value);
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(node) {
        if (node === null) return true;

        const leftHeight = this._height(node.left);
        const rightHeight = this._height(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }

    rebalance() {
        const values = [];

        this.inOrderForEach((value) => values.push(value));

        this.root = this._buildTree(values, 0, values.length - 1);
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
