//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function (strs) {
//   let hashMap = new Map();
//   let values = [];
//   let alphabet = [];
//   const createHash = (str) => {
//     alphabet = new Array(26).fill(0);
//     for (let i = 0; i < str.length; i++) {
//       alphabet[str.charCodeAt(i) - 97]++;
//     }
//     let key = alphabet.join("#");
//     if (hashMap.has(key)) {
//       values = hashMap.get(key);
//       values.push(str);
//       hashMap.set(key, values);
//     } else {
//       values = [str];
//       hashMap.set(key, values);
//     }
//   };

//   for (let i = 0; i < strs.length; i++) {
//     createHash(strs[i]);
//   }
//   return Array.from(hashMap.values());
// };

var groupAnagrams = function (strs) {
  const hashMap = new Map();

  for (const str of strs) {
    const key = [...str].sort().join("");
    if (hashMap.has(key)) {
      hashMap.get(key).push(str);
    } else {
      hashMap.set(key, [str]);
    }
  }

  return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
