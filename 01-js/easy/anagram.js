/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Converting to lower case first and then into an array
  const str1Arr = str1.toLowerCase().split("");
  const str2Arr = str2.toLowerCase().split("");

  // Comparing array lengths
  if (str1Arr.length != str2Arr.length) return false;

  // Sorting both the array
  const sortedOne = str1Arr.sort();
  const sortedTwo = str2Arr.sort();

  // Comparing letter by letter of both arrays
  for (let i = 0; i < sortedOne.length; i++) {
    if (sortedOne[i] != sortedTwo[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
