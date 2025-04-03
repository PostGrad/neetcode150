'''
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
'''

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
    

nums = [1,2,3,1]
obj = Solution()
print(obj.containsDuplicate(nums))