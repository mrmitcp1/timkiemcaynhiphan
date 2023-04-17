import {TreeNode} from "./treenode";

export interface Tree<T>{
    insert(data :T):TreeNode<T>;
    inorder(node:TreeNode<T>);
    getSize():number;
}