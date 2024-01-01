/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise((resolve) => {
    const startTime = Date.now();

    function busyLoop() {
      while (Date.now() - startTime < milliseconds) {
        // keeping thread busy
      }

      resolve();
    }

    setTimeout(busyLoop, 0);
  });
}

sleep(3000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
module.exports = sleep;
