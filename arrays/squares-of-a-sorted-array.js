/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let sqNums = nums.map((num) => num * num);
  return sqNums.sort((a, b) => a - b);
};

let nums = [-7, -3, 2, 3, 11];

console.log(sortedSquares(nums));
