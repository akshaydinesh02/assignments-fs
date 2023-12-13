/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // Approach 1 - O(n)
  // let largest = numbers[0];
  // numbers.map((number) => {
  //   if (number > largest) {
  //     largest = number;
  //   }
  // });
  // return largest;
  // ==================================
  // Approach 2 -- O(n)
  // return numbers.reduce((acc, cur) => {
  //   if (cur > acc) acc = cur;
  //   return acc;
  // }, numbers[0]);
  // ==================================
  // Approach 3
  // return numbers.length ? Math.max(...numbers) : undefined;
  // ==================================
  // Approach 4 -- O(n)
  if (!numbers || !numbers.length) return undefined;

  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) largest = numbers[i];
  }
  return largest;
}

module.exports = findLargestElement;
