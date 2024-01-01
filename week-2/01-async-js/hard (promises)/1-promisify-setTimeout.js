/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const promisifiedVar = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
  return promisifiedVar;
}

wait(5)
  .then((res) => console.log("res", res))
  .catch((err) => console.log("err", err));

module.exports = wait;
