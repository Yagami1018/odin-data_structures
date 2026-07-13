import { BinarySearchTree } from "../dataStructures/binarytrees";

describe("Binary Search Tree", () => {
    let nums;
    let tree;
    beforeEach(() => {
        nums = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
        tree = new BinarySearchTree(nums);
    });
    test("Build Tree", () => {
        expect(tree.root.data).toBe(8);
    });

    test("Includes", () => {
        expect(tree.includes(67)).toBe(true);
    });
    test("Insert", () => {
        tree.insert(11);
        expect(tree.includes(11)).toBe(true);
    });
});
