/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
let nums = [3, 2, 4],
  target = 6;
console.log(twoSum(nums, target));
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
