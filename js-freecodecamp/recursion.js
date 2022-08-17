// Use Recursion to Create a Countdown
// In a previous challenge, you learned how to use recursion to replace a for loop.
//     Now, let's look at a more complex function that returns an array of
//     consecutive integers starting with 1 through the number passed to the function.

// As mentioned in the previous challenge, there will be a base case.
// The base case tells the recursive function when it no longer needs to call itself.
// It is a simple case where the return value is already known.There will also be a
// recursive call which executes the original function with different arguments.
// If the function is written correctly, eventually the base case will be reached.

// For example, say you want to write a recursive function that returns an array
//  containing the numbers 1 through n.This function will need to accept an argument,
//     n, representing the final number.Then it will need to call itself with
//      progressively smaller values of n until it reaches 1. You could write the function as follows:

// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     // console.log(n);
//     const countArray = countup(n - 1);
//     // console.log(countArray);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(1));
// The value [1, 2, 3, 4, 5] will be displayed in the console.

// At first, this seems counterintuitive since the value of n decreases,
//     but the values in the final array are increasing.
//     This happens because the push happens last, after the recursive call has returned.
//     At the point where n is pushed into the array, countup(n - 1)
//      has already been evaluated and returned[1, 2, ..., n - 1].

// We have defined a function called countdown with one parameter(n).
//  The function should use recursion to return an array containing
//  the integers n through 1 based on the n parameter.If the function
//     is called with a number less than 1, the function should return
//     an empty array.For example, calling this function with n = 5
//     should return the array[5, 4, 3, 2, 1].Your function must use
//     recursion by calling itself and must not use loops of any kind.

// Змініть код лише під цим рядком
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.push(n  1);
//     return countArray;
//   }

// return n < 1 ? [] : [n, ...countdown(n - 1)];

//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.splice(0, 0, n);
//     return arr;
//   }
// }
// console.log(countdown(20));
// // Змініть код лише над цим рядком

// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
//   return startNum === endNum ? [startNum]
//     : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
// }

// console.log(rangeOfNumbers(10, 5));

// function checkScope() {
//   let i = "function scope";
//   if (true) {
//     i = "block scope";
//     console.log("Block scope i is: ", i);
//   } else console.log("Function scope i is: ", i);
//   return i;
// }
// console.log(checkScope());

const s = [5, 7, 2];
function editInPlace() {
  // Змініть код лише під цим рядком

  // Використання s = [2, 5, 7] може бути недійсним
  s.splice(0, 3, 2, 5, 7);
  return s;
  // Змініть код лише над цим рядком
}
console.log(editInPlace());
