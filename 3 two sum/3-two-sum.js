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
// var twoSum = function (nums, target) {
//   const invertedNums = nums.map((n) => target - n);
//   let invertedIndex;
//   for (let index = 0; index < nums.length; index++) {
//     invertedIndex = invertedNums.indexOf(nums[index]);
//     if (invertedNums.includes(nums[index]) && index !== invertedIndex) {
//       return [index, invertedIndex];
//     }
//   }
//   return [-1, -1];
// };

var twoSum = function (nums, target) {
  let map = new Map();
  for (let index = 0; index < nums.length; index++) {
    console.log(index + 1, map.get(target - nums[index]));
    if (map.get(target - nums[index]) === undefined) {
      map.set(nums[index], index);
      console.log(map);
    } else return [index, map.get(target - nums[index])];
  }
};

let nums = [2, 7, 11, 15, 3, 3];
let target = 6;
console.log(twoSum(nums, target));
