/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let unicElements = Array.from(new Set(nums));
  nums.unshift(...unicElements);

  return unicElements.length;
};

let nums = [1, 1, 2];

console.log(removeDuplicates(nums));
console.log(nums);
