'''
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
'''

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         sortedS = list(s)
#         sortedT = list(t)
#         sortedS.sort()
#         sortedT.sort()
#         return len(s) == len(t) and set(s) == set(t) and sortedS == sortedT

    
# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         return sorted(s) == sorted(t)


from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)

st1 = "aacc"
st2 = "ccac"
obj = Solution()
print(obj.isAnagram(st1, st2))