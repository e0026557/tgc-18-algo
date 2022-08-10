
// 1. Define base case
// 2. What is the step that is being repeated
// 3. Recursive call with a smaller problem (to reach base case)

// Find aum of array given an array of numbers
// -> option 1: reach the last index in the array
// -> option 2: if the array is empty

// version 1:
// function sumOfArray(arr, currIndex) {
//   // Check if exceede3d the last index (length -1)
//   if (currIndex == arr.length) {
//     return 0;
//   }
//   return arr[currIndex] + sumOfArray(arr, currIndex + 1);
// }

// console.log(sumOfArray([1, 2, 3], 0));

// version 2:
function sumOfArray(arr) {
  if (arr.length == 0) {
    return 0;
  }
  return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([1, 2, 3]));