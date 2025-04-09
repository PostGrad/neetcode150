'''
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
'''

# class Solution:
#     def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
#         map={}
#         for s in strs:
#             key = ''.join(sorted(s))
#             if key in map:
#                 map[key].append(s)
#             else:
#                 map[key]=[s]
#         return list(map.values())

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        if not strs:
            return []
        
        map={}
        for s in strs:
            key = ''.join(sorted(s))
            map.setdefault(key, []).append(s)
        return list(map.values())

print(Solution().groupAnagrams([""]))