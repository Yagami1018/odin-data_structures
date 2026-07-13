export class BinarySearchTree {
    constructor(arr = []) {
        let sorted = arr.toSorted((a, b) => a - b);
        sorted = Array.from(new Set(sorted));
        this.root = this._buildTree(sorted, 0, sorted.length - 1);
    }
    _buildTree(arr = [], start, end) {
        if (start > end) return null;
        let middle = start + Math.floor((end - start) / 2);

        let root = new Node(arr[middle]);
        root.left = this._buildTree(arr, start, middle - 1);
        root.right = this._buildTree(arr, middle + 1, end);

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
