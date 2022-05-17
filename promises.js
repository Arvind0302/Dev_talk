function sample() {
  let error = false;
  return new Promise((resolve, reject) => {
    if (error) {
      reject("Sorry, promises can't be resolved!!");
    } else {
      resolve("Success");
    }
  });
}

sample()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Callback hell solution 

// let production = (time, work) => {
//   return new Promise((resolve, reject) => {
//     var error = true;
//     if (!error) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else reject(console.log("Error found!!"));
//   });
// };

// production(2000, () => console.log("task 1 completed"))
//   .then(() => {
//     return production(0000, () => console.log("task 2 completed"));
//   })
//   .then(() => {
//     return production(2000, () => console.log("task 3 completed"));
//   })
//   .then(() => {
//     return production(1000, () => console.log("task 4 completed"));
//   })
//   .then(() => {
//     return production(1000, () => console.log("task 5 completed"));
//   })
//   .then(() => {
//     return production(2000, () => console.log("task 6 completed"));
//   })
//   .then(() => {
//     return production(3000, () => console.log("task 7 completed"));
//   })
//   .catch(()=>{
//     console.log("Sorry")
//   })
//   .finally(()=>{
//     console.log("end of the function")
//   });


// More than one promise

// const p1 = new Promise((resolve, reject) => {
//   resolve("Task 1 completed");
// });

// const p2 = new Promise((resolve, reject) => {
//   resolve("Task 2 completed");
// });

// const p3 = new Promise((resolve, reject) => {
//   resolve("Task 3 completed");
// });

// // .all rerurn when all promises have been resolved
// Promise.all([p1, p2, p3]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

// // .race will return when either of them is resolved
// Promise.race([p1, p2, p3]).then(
//   (message) => {
//     console.log(message);
//   }
// );
