export class BinarySearchTree {
    constructor(arr = []) {
        const sorted = arr.toSorted();
        this.tree = this._buildTree(arr, 0, sorted.length - 1);
    }
    _buildTree(arr = [], start, end) {
        if (start > end) return null;
        arr = Array.from(new Set(arr));
        let middle = Math.floor((end - start) / 2);

        let root = new Node(arr[middle]);
        root.left = this.buildTree(arr, start, middle - 1);
        root.right = this.buildTree(arr, middle + 1, end);

        return root;
    }
}

class Node {
    left = null;
    right = null;
}
