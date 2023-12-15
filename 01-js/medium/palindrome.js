/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (!str || !str.length) return true;
  const strArr = str.replace(/[^a-zA-Z0-9]/g, "").split("");
  const strReverseArr = [...strArr].reverse();
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].toLowerCase() != strReverseArr[i].toLowerCase()) return false;
  }
  return true;
}

module.exports = isPalindrome;
