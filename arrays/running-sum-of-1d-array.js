/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      sum += nums[i];
    }
    nums[i] = sum;
  }

  return nums;
};

let nums = [1, 1, 1, 1, 1];

console.log(runningSum(nums));
