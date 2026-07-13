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

        if (key < root.data) {
            root.left = this._delete(root.left, key);
            return root;
        }

        if (key > root.data) {
            root.right = this._delete(root.right, key);
            return root;
        }

        if (root.left === null) {
            return root.right;
        }

        if (root.right === null) {
            return root.left;
        }

        const successor = this._minValue(root.right);
        root.data = successor.data;
        root.right = this._delete(root.right, successor.data);

        return root;
    }

    _minValue(root) {
        while (root.left !== null) {
            root = root.left;
        }

        return root;
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
