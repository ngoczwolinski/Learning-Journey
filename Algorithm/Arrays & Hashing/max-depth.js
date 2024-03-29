/*

Given an arbitrarily nested array of arrays, return the maximum depth.

For example:


maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)

maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)

maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)

maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)

*/

const maxDepth = (arr) => {
  let depth = 1;
  // Loop through the arr
  for (const e of arr) {
    // If element is an arr
    if (Array.isArray(e)) {
      // Find the depth of the current element
      const curDepth = 1 + maxDepth(e);
      // Update max depth if applicable
      depth = Math.max(depth, curDepth);
    }
  }
  return depth;
};
// console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]));
