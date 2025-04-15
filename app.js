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