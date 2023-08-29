// 543. Diameter of Binary Tree

/**
 * Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

 

Example 1:


Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Time Complexity: O(n)
// Space Complexity: O(h)
function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxLength = 0;
  dfs(root);
  return maxLength;
  function dfs(root: TreeNode | null): number {
    // Base case;
    if (!root) return 0;
    // Recursive:
    const left = dfs(root.left);
    const right = dfs(root.right);
    // Update maxlength
    maxLength = Math.max(maxLength, left + right);
    return Math.max(left, right) + 1;
  }
}
