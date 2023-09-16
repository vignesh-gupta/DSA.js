// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let curr = 0,
    maxProfit = 0,
    next = 1;
  while (next < prices.length) {
    maxProfit = Math.max(maxProfit, prices[next] - prices[curr]);
    if (prices[next] < prices[curr]) curr = next;
    next++;
  }
  return maxProfit;
};

let prices = [7, 1, 5, 3, 6, 4];

console.log(maxProfit(prices));
