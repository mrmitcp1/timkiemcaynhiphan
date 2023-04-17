import {BinaryTree} from "./BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(5)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(1)
tree.insert(6)
tree.insert(7)
console.log(`the numbers of nodes ${tree.totalNode}`)
tree.inorder(tree.root)