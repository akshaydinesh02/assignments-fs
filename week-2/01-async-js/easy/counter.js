let counter = 0;

function increaseCounter() {
  counter += 1;
  console.log("Counter now", counter);
}

setTimeout(increaseCounter, 1000);
