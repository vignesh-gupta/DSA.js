/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];

  nums.sort((a, b) => a - b);
  var count = 0;
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      count = 0;
    } else {
      count++;
    }
    if (count >= Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
  return 0;
};

let nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
