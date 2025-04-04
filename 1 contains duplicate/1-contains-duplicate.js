//Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

const readline = require("readline");

// const containsDuplicate = function (nums) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return true;
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   return false;
// };

const containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};

// take input from user in console

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter numbers: ", (answer) => {
  const nums = answer.trim().split(/\s+/).map(Number);
  console.log(nums);
  console.log(containsDuplicate(nums));
  rl.close();
});
