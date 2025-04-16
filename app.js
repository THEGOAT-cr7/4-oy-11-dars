// Closure
function createCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Callback hell
// function task1(callback) {
//     setTimeout(() => {
//       console.log("Task 1 done");
//       callback();
//     }, 1000);
//   }

//   function task2(callback) {
//     setTimeout(() => {
//       console.log("Task 2 done");
//       callback();
//     }, 1000);
//   }

//   function task3(callback) {
//     setTimeout(() => {
//       console.log("Task 3 done");
//       callback();
//     }, 1000);
//   }

//   task1(() => {
//     task2(() => {
//       task3(() => {
//         console.log("All tasks completed");
//       });
//     });
//   });

// Pure function
// function add(a, b) {
//     return a + b;
//   }

//   console.log(add(2, 3));
//   console.log(add(2, 3));

// HOF
// function HOF(arr, transform) {
//     return arr.map(transform);
//   }

//   const double = (x) => x * 2;

//   const numbers = [1, 2, 3, 4];
//   console.log(HOF(numbers, double));

// leetcode.com
// isPalindrome = function(x) {
//     if (x < 0) return false;

//     let str = x.toString();
//     let reversed = str.split('').reverse().join('');

//     return str === reversed;
// };
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

// leetcode.com number2
// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     let sortedS = s.split('').sort().join('');
//     let sortedT = t.split('').sort().join('');
//     return sortedS === sortedT;
// }

// console.log(isAnagram("anagram", "nagaram"));
// console.log(isAnagram("rat", "car"));

// // leetcode.com number3
// function twoSum(nums, target) {
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.hasOwnProperty(complement)) {
//             return [map[complement], i];
//         }
//         map[nums[i]] = i;
//     }
// }

// console.log("\nTwo Sum:");
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));