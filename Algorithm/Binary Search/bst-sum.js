function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  /*
  
  Given the root of a binary search tree, determine the sum of all the values.
  Note that the function signature is NOT defined as a method on the
  BinarySearchTree prototype. Instead, we provide the root as an argument to the
  function.
  
  */
  
  const bstSum = (root) => {
    // Base case: root is null, return sum;
    if (!root) return 0;
    return root.value + bstSum(root.left) + bstSum(root.right);
  };
  
  /*
  
  Extension:
  Given the root of a binary search tree, reverse the binary search tree in-place
  and return the root. Reverse the tree so that for each node, every number on the
  left is greater and every number on the right is lesser.
  
  For example, the original tree:
  
       4
     /   \
    2     7
   / \     \
  1   3     9
           /
          8
  
  reverses to:
  
       4
     /   \
    7     2
   /     / \
  9     3   1
   \
    8
  
  Do this in-place, so that we never use the BinarySearchTree constructor to
  create any new nodes in memory.
  
  Note that the function signature is NOT defined as a method on the
  BinarySearchTree prototype. Instead, we provide the root as an argument to the
  function.
  
  */
  
  const bstReverse = (root) => {
    // Base case: if root is null, return root
    if (!root) return root;
  
    // Flip left and right branch
    [root.left, root.right] = [bstReverse(root.right), bstReverse(root.left)];
    return root;
  };
  
  