import {Tree} from "./Tree";
import {TreeNode} from "./treenode";

export class BinaryTree<T> implements Tree<T>{
    root:TreeNode<T>|null;
    totalNode:number;
    constructor() {
        this.root=null;
        this.totalNode=0
    }
    getSize(): number {
        return this.totalNode
    }

    inorder(node: TreeNode<T>|null):void {
        if (node){
            if (node.left){
                this.inorder(node.left)
            }
            console.log(node.data)
            if (node.right){
                this.inorder(node.right)
            }
        }
    }

    insert(data: T): TreeNode<T>{
        if (!this.root){
            this.root=new TreeNode<T>(data);
            this.totalNode++;
            return  this.root;
        }else {
            let node=new TreeNode(data);
            let currentNode = this.root
            while (currentNode){
                if (data<currentNode.data){
                    if (!currentNode.left){
                        currentNode.left=node;
                        break
                    }
                    currentNode=currentNode.left
                }else if (data>currentNode.data){
                    if (!currentNode.right){
                        currentNode.right=node
                        break
                    }
                    currentNode=currentNode.right
                }
            }
            this.totalNode++;
            return currentNode
        }
    }

}