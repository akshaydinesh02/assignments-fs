let counter = 0;

function updateCounter() {
  counter += 1;
  console.log("Counter now", counter);

  setTimeout(updateCounter, 1000);
}

updateCounter();
