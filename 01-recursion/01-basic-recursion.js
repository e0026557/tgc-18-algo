// Recursion
// -> an alternative to loops

// Iterative method
// for (let x= 0; x < 10; x++) {
//   console.log(x);
// }

// Recursive method (known as Induction in Maths)
// function printX(x) {
//   // Base case
//   // N-> condition to end the function to prevent infinite calls of function
//   if (x == 10) {
//     return;
//   }

//   // Repeating part
//   console.log(x);

//   // Recursive call (a new stack frame is being created in the stack inside RAM)
//   // Note: shrink the problem size when calling the function
//   printX(x + 1);
// }

// printX(0);

// Hands on
// function sum(n) {
//   // base case
//   if (n == 0) {
//     return 0;
//   }
//   return n + sum(n-1);
// }
// console.log(sum(3));
