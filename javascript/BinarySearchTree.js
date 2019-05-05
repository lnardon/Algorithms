class Node {
    constructor(data, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
}
  
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node === null) {
        this.root = new Node(data);
        return;
        } else {
        const searchTree = function(node) {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
                } else if (data > node.data) {
                    if (node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
            return null;
            }
        };
        return searchTree(node);
        }
        } 
    inOrder() {
        if (this.root == null) {
        return null;
        } else {
        var result = new Array();
        function traverseInOrder(node) {       
            node.left && traverseInOrder(node.left);
            result.push(node.data);
            node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
        };
}
}
let binaryAlgo = new BinarySearchTree ();
    

// Test

binaryAlgo.add(3);
binaryAlgo.add(34);
binaryAlgo.add(23);
binaryAlgo.add(7);
binaryAlgo.add(38);
binaryAlgo.add(12);
binaryAlgo.add(1);
binaryAlgo.add(21);
binaryAlgo.add(9);

console.log(binaryAlgo.inOrder());  
