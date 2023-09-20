/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res.push(product);
    product *= nums[i];
  }

  console.log(res);
  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }
  console.log(res);
  return res;
};

let nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
