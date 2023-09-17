/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length == 1) return 0;

  let left = 0,
    total = nums.reduce((acc, num) => acc + num);

  for (let i = 0; i < nums.length; i++) {
    if (left === total - left - nums[i]) return i;
    left += nums[i];
  }

  return -1;
};

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
