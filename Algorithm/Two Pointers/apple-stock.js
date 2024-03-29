/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

// Time Complexity: O(n) for n is the length of apple_stock
// Space Complexity: O(1)
const highestProfit = (apple_stock) => {
  // Check for valid input
  if (
    !Array.isArray(apple_stock) ||
    apple_stock.some((stock) => isNaN(Number(stock)))
  )
    return 0;

  // Initialize left pointer
  let l = 0;
  // Initialize profit
  let profit = 0;
  for (const r in apple_stock) {
    if (apple_stock[r] < apple_stock[l]) {
      // Move left pointer
      l = r;
    } else profit = Math.max(profit, apple_stock[r] - apple_stock[l]);
  }
  return profit;
};

