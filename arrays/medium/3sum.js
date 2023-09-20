/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let pairs = [];
  n = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let k = n - 1,
      j = i + 1;

    while (j < k) {
      if (nums[j] + nums[k] == -nums[i]) {
        pairs.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
        j++, k--;
      } else {
        if (nums[j] + nums[k] > -nums[i]) k--;
        else j++;
      }
    }
  }
  return pairs;
};

let nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
