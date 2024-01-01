/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve();
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve();
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve) => {
    return setTimeout(() => {
      return resolve();
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  const promise1 = wait1(t1);
  const promise2 = wait2(t2);
  const promise3 = wait3(t3);
  return promise1.then(() => {
    console.log("Promise 1 resolved");
    return promise2.then(() => {
      console.log("Promise 2 resolved");
      return promise3.then(() => {
        console.log("Promise 3 resolved");
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        return totalTime;
      });
    });
  });
}

calculateTime(1, 2, 3)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

module.exports = calculateTime;
