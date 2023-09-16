/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length <= 2) return;

  let right = 1,
    left = 0;

  while (right < nums.length) {
    if (nums[left] !== 0) {
      left++, right++;
    } else {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
      right++;
    }
  }
};

let nums = [2, 1];
moveZeroes(nums);

console.log(nums);
