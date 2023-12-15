/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  if (!str || !str.length) return 0;
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const lowerStr = str.toLowerCase();
  lowerStr.split("").map((char) => {
    if (vowels.includes(char)) count += 1;
  });
  return count;
}

module.exports = countVowels;
