import { BinarySearchTree } from "./dataStructures/binarytrees.js";

function randomArray(size = 15, max = 100) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

const tree = new BinarySearchTree(randomArray());

console.log("=== Initial Tree ===");
tree.prettyPrint(tree.root);

console.log("\nBalanced:", tree.isBalanced());

console.log("\nLevel Order");
tree.levelOrderForEach((value) => console.log(value));

console.log("\nPre Order");
tree.preOrderForEach((value) => console.log(value));

console.log("\nPost Order");
tree.postOrderForEach((value) => console.log(value));

console.log("\nIn Order");
tree.inOrderForEach((value) => console.log(value));

console.log("\nAdding values...");

tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);
tree.insert(160);

console.log("\n=== Unbalanced Tree ===");
tree.prettyPrint(tree.root);

console.log("\nBalanced:", tree.isBalanced());

console.log("\nRebalancing...");

tree.rebalance();

console.log("\n=== Balanced Tree ===");
tree.prettyPrint(tree.root);

console.log("\nBalanced:", tree.isBalanced());

console.log("\nLevel Order");
tree.levelOrderForEach((value) => console.log(value));

console.log("\nPre Order");
tree.preOrderForEach((value) => console.log(value));

console.log("\nPost Order");
tree.postOrderForEach((value) => console.log(value));

console.log("\nIn Order");
tree.inOrderForEach((value) => console.log(value));
